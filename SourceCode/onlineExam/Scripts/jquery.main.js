$(document).ready(function(){
	gallery1 = $('#carousel').gallery({
		duration: 500,
		autoRotation: 5000,
		listOfSlides: 'div.gallery > ul > li'
	});
	$('.loginSuccess-holder').loginSuccess({
		redirectPage:'/teachers/',
		redirectTime:1500
	});
	showPassword();
	
});
function hideFormText() {
	var _inputs = document.getElementsByTagName('input');
	var _txt = document.getElementsByTagName('textarea');
	var _value = [];
	
	if (_inputs) {
		for(var i=0; i<_inputs.length; i++) {
			if (_inputs[i].type == 'text' || _inputs[i].type == 'password') {
				
				_inputs[i].index = i;
				_value[i] = _inputs[i].value;
				
				_inputs[i].onfocus = function(){
					if (this.value == _value[this.index])
						this.value = '';
				}
				_inputs[i].onblur = function(){
					if (this.value == '')
						this.value = _value[this.index];
				}
			}
		}
	}
	if (_txt) {
		for(var i=0; i<_txt.length; i++) {
			_txt[i].index = i;
			_value['txt'+i] = _txt[i].value;
			
			_txt[i].onfocus = function(){
				if (this.value == _value['txt'+this.index])
					this.value = '';
			}
			_txt[i].onblur = function(){
				if (this.value == '')
					this.value = _value['txt'+this.index];
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", hideFormText, false);
else if (window.attachEvent)
	window.attachEvent("onload", hideFormText);
function showPassword(){
	var password = $('#Password');
	var text = $('<input type="text" />').appendTo(password.parent()).val(password.val()).hide();
	var checkPassword = $('#Show-password');
	password.keyup(function(){
		text.val($(this).val());
	});
	text.keyup(function(){
		password.val($(this).val());
	});
	checkPassword.change(function(){
		if ($(this).is(':checked')) {
			text.show();
			password.hide();
		}
		else {
			text.hide();
			password.show();
		}
	});
}
(function($) {
	$.fn.loginSuccess = function(options) { return new loginSuccess(this.get(0), options); };
	
	function loginSuccess(context, options) { this.init(context, options); };
	
	loginSuccess.prototype = {
		options:{},
		init: function (context, options){
			this.options = $.extend({
				duration: $.browser.msie ? 0 : 700,
				pageMain: '.page-main',
				pageSuccess: '.page-success',
				pageFailure: '.page-failure',
				pagePassword: '.page-password',
				redirectPage:false,
				redirectTime:1500,
				pagePasswordSuccess: '.page-password-success',
				pagePasswordFailure: '.page-password-failure',
				pages: '.login-box',
				event: 'click'
			}, options || {});
			this.els = $(context).find(this.options.pages).css({opacity:0});
			this.redirectPage = this.options.redirectPage;
			this.activeClass = 'page-active';
			this.pageMain = this.els.filter(this.options.pageMain).css({opacity:1}).css({opacity:'auto'}).addClass(this.activeClass);
			this.pageMainForm = this.pageMain.find('form');
			this.pageMainSubmit = this.els.find('.button');
			this.directSuccess = this.pageMain.find('.forgot');
			this.pageSuccess = this.els.filter(this.options.pageSuccess);
			this.pageFailure = this.els.filter(this.options.pageFailure);
			this.back = this.pageFailure.find('.page-back');
			this.pagePassword = this.els.filter(this.options.pagePassword);
			this.pagePasswordForm = this.pagePassword.find('form');
			this.backHome = this.pagePassword.find('.nevermind a');
			this.pagePasswordSuccess = this.els.filter(this.options.pagePasswordSuccess);
			this.home = this.pagePasswordSuccess.find('.home-back');
			this.pagePasswordFailure = this.els.filter(this.options.pagePasswordFailure);
			this.mailBack = this.pagePasswordFailure.find('.mail-back');
			this.input = $(context).find('input[type="text"],input[type="password"]');
			
			this.mainForm(this);
			this.mailForm(this);
			this.mainSubmit(this, this.pageMainSubmit);
			this.redirect(this, this.backHome,this.pagePassword,this.pageMain);
			this.redirect(this, this.back,this.pageFailure,this.pageMain);
			this.redirect(this, this.home,this.pagePasswordSuccess,this.pageMain);
			this.redirect(this, this.mailBack,this.pagePasswordFailure,this.pagePassword);
			this.redirect(this, this.directSuccess,this.pageMain,this.pagePassword);
			this.inputSubmit(this);
		},
		inputSubmit: function($this){
			$this.input.bind('keypress', function(e){
				if (e.which == 13) $(this).parents('form').trigger('submit');
			});
		},
		initValidation: function($this,$form){
			$this.valid = false;
			$this.regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			$form.find('.error').removeClass('error');
			$form.find('input.required-email').each(function(){
				if(!$this.regEmail.test($(this).val())) {
					$(this).parents('.row').addClass('error');
					$this.valid = true;
				}
			});
			$form.find('input.required').each(function(){
				if(!$(this).val().length || $(this).val() == $(this).attr('alt')) {
					$(this).parents('.row').addClass('error');
					$this.valid = true;
				}
			});
			return $this.valid;
		},
		mailForm: function($this){
			$this.pagePasswordForm.bind('submit', function(){
				if (!$this.initValidation($this,$(this))) {
					$this.initAjax($this,$(this),'/teachers/ajax/sendPassword.cfm',$this.pagePassword,$this.pagePasswordSuccess,$this.pagePasswordFailure);
				}
				return false;
			});
		},
		initAjax: function($this,$form,$url,$fadeOut,$fadeInTrue,$fadeInFalse,$redirectPage){
			$.ajax({
				type: 'POST',
				url: $url,
				dataType: 'text',
				data: $form.serialize(),
				success: function(msg){
					if (eval(msg)) {
						$this.fadeElement($fadeOut,$fadeInTrue);
						$('body').addClass('success');
						if ($redirectPage) {
							setTimeout(function(){window.location = $redirectPage;},$this.options.redirectTime);
						}
					}
					else {
						$this.fadeElement($fadeOut,$fadeInFalse);
						$('body').addClass('failure');
					}
				},
				error: function(){
					alert('ajax error');
				}
			});
		},
		mainForm: function($this){
			$this.pageMainForm.bind('submit', function(){
				if (!$this.initValidation($this,$(this))) {
					$this.initAjax($this,$(this),'/teachers/ajax/loginAjax.cfm',$this.pageMain,$this.pageSuccess,$this.pageFailure,$this.redirectPage);
				}
				return false;
			});
		},
		redirect: function($this, addEventEl,_fadeOut,_fadeIn){
			addEventEl.bind($this.options.event, function(){
				$('body').removeClass('success').removeClass('failure');
				$this.fadeElement(_fadeOut,_fadeIn);
				return false;
			});
		},
		mainSubmit: function($this, addEventEl){
			addEventEl.bind($this.options.event, function(){
				$(this).parents('form').trigger('submit');
				return false;
			});
		},
		fadeElement: function(_fadeOut,_fadeIn){
			this.els.removeClass(this.activeClass);
			_fadeOut.animate({opacity:0}, {queue:false, duration: this.options.duration});
			_fadeIn.addClass(this.activeClass).animate({
				opacity:1
			}, {queue:false, duration: this.options.duration, complete: function(){
				$(this).css('opacity','auto');
			}});
		},


		initEvent: function($this, addEventEl, addDisClass, dir){
			addEventEl.bind($this.options.event, function(){
				return false;
			});
		},
		toPrepare: function($this, side){
		}
	}
}(jQuery));
(function($) { 
	function Gallery(el, options) {
		this._hold = $(el);
		this.initOptions(options);
		this._timer = options.autoRotation;
		this._t;
		this.initialize();
	}
	
	$.fn.gallery = function(options) {
		return new Gallery(this.get(0), options);
	};
	
	Gallery.prototype = {
		initOptions: function(_obj){
			this.options = {
				duration: 700,
				slideElement: 1,
				autoRotation: false,
				effect: false,
				listOfSlides: 'ul > li',
				switcher: false,
				disableBtn: false,
				nextBtn: 'a.link-next, a.btn-next, a.next',
				prevBtn: 'a.link-prev, a.btn-prev, a.prev',
				circle: true,
				direction: false,
				IE: false
			};
			for(key in _obj) this.options[key] = _obj[key];
		},
		initialize: function(){
			var _this = this;
			var _hold = _this._hold;
			var _speed = _this.options.duration;
			var _timer = _this.options.autoRotation;
			var _el = _hold.find(_this.options.listOfSlides);
			if (_this.options.effect) var _list = _el;
			else var _list = _el.parent();
			var _switcher = _hold.find(_this.options.switcher);
			var _next = _hold.find(_this.options.nextBtn);
			var _prev = _hold.find(_this.options.prevBtn);
			var _count = _el.index(_el.filter(':last'));
			var _w = _el.outerWidth(true);
			var _h = _el.outerHeight(true);
			if (_this.options.switcher) var _active = _switcher.index(_switcher.filter('.active:eq(0)'));
			else var _active = _el.index(_el.filter('.active:eq(0)'));
			if (_active < 0) _active = 0;
			var _last = _active;

			// Installation directions
			if (!_this.options.direction) {
				var _wrapHolderW = Math.ceil(_list.parent().width() / _w);
				if (((_wrapHolderW - 1) * _w + _w / 2) > _list.parent().width()) _wrapHolderW--;
			}
			else{
				var _wrapHolderW = Math.ceil(_list.parent().height()/_h);
				if (((_wrapHolderW-1)*_h + _h/2) > _list.parent().height()) _wrapHolderW--;
			}
			
			// Setting "fade" or "slide" effect
			if (!_this.options.effect) var rew = _count - _wrapHolderW + 1;
			else var rew = _count;
			if (!_this.options.effect) {
				if (!_this.options.direction) _list.css({marginLeft: -(_w * _active)})
				else _list.css({marginTop: -(_h * _active)})
			}
			else {
				_list.css({
					opacity: 0
				}).removeClass('active').eq(_active).addClass('active').css({
					opacity: 1
				}).css('opacity', 'auto');
				_switcher.removeClass('active').eq(_active).addClass('active');
			}
			
			// Disable or enable buttons "prev next"
			if (_this.options.disableBtn) {
				if (_count < _wrapHolderW) _next.addClass(_this.options.disableBtn);
				_prev.addClass(_this.options.disableBtn);
			}
			
			// Function to "fade"
			function fadeElement(){
				if ($.browser.msie && _this.options.IE){
					_list.eq(_last).css({opacity:0});
					_list.removeClass('active').eq(_active).addClass('active').css({opacity:'auto'});
				}
				else{
					_list.eq(_last).animate({opacity:0}, {queue:false, duration: _speed});
					_list.removeClass('active').eq(_active).addClass('active').animate({
						opacity:1
					}, {queue:false, duration: _speed, complete: function(){
						$(this).css('opacity','auto');
					}});
				}
				if (_this.options.switcher) _switcher.removeClass('active').eq(_active).addClass('active');
				_last = _active;
			}
			
			// Function for "slide"
			function scrollEl(){
				if (!_this.options.direction) _list.animate({marginLeft: -(_w * _active)}, {queue:false, duration: _speed})
				else _list.animate({marginTop: -(_h * _active)}, {queue:false, duration: _speed})
				if (_this.options.switcher) _switcher.removeClass('active').eq(_active).addClass('active');
			}
			function toPrepare(){
				if ((_active == rew) && _this.options.circle) _active = -_this.options.slideElement;
				for (var i = 0; i < _this.options.slideElement; i++){
					_active++;
					if (_active > rew) {
						_active--;
						if (_this.options.disableBtn &&(_count > _wrapHolderW)) _next.addClass(_this.options.disableBtn);
					}
				};
				if (_active == rew) if (_this.options.disableBtn &&(_count > _wrapHolderW)) _next.addClass(_this.options.disableBtn);
				if (!_this.options.effect) scrollEl();
				else fadeElement();
			}
			_this._hold.bind('runTimer', function(){
				_this._t = setInterval(function(){
					toPrepare();
				}, _this._timer);
			});
			_next.click(function(){
				if(_this._t) clearTimeout(_this._t);
				if (_this.options.disableBtn &&(_count > _wrapHolderW)) _prev.removeClass(_this.options.disableBtn);
				toPrepare();
				if (_this._timer) _this._hold.trigger('runTimer');
				return false;
			});
			_prev.click(function(){
				if(_this._t) clearTimeout(_this._t);
				if (_this.options.disableBtn &&(_count > _wrapHolderW)) _next.removeClass(_this.options.disableBtn);
				if ((_active == 0) && _this.options.circle) _active = rew + _this.options.slideElement;
				for (var i = 0; i < _this.options.slideElement; i++){
					_active--;
					if (_active < 0) {
						_active++;
						if (_this.options.disableBtn &&(_count > _wrapHolderW)) _prev.addClass(_this.options.disableBtn);
					}
				};
				if (_active == 0) if (_this.options.disableBtn &&(_count > _wrapHolderW)) _prev.addClass(_this.options.disableBtn);
				if (!_this.options.effect) scrollEl();
				else fadeElement();
				if (_this._timer) _this._hold.trigger('runTimer');
				return false;
			});
			if (_this.options.switcher) _switcher.click(function(){
				_active = _switcher.index($(this));
				if(_this._t) clearTimeout(_this._t);
				if (!_this.options.effect) scrollEl();
				else fadeElement();
				if (_this._timer) _this._hold.trigger('runTimer');
				return false;
			});
			if (_this._timer) _this._hold.trigger('runTimer');
		},
		stop: function(){
			var _this = this;
			alert(1);
			if (_this._t) clearTimeout(_this._t);
		},
		play: function(){
			var _this = this;
			alert(2);
			if (_this._t) clearTimeout(_this._t);
			if (_this._timer) _this._hold.trigger('runTimer');
		}
	}
}(jQuery));
