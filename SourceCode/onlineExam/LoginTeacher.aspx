<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LoginTeacher.aspx.cs" Inherits="onlineExam.Loginteacher" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" type="text/css" href="Style/login.css" />
    <link rel="stylesheet" type="text/css" href="Style/grid.css" />
    <style type="text/css">
        cufon
        {
            text-indent: 0 !important;
        }
        @media screen,projection
        {
            cufon
            {
                display: inline !important;
                display: inline-block !important;
                position: relative !important;
                vertical-align: middle !important;
                font-size: 1px !important;
                line-height: 1px !important;
            }
            cufon cufontext
            {
                display: -moz-inline-box !important;
                display: inline-block !important;
                width: 0 !important;
                height: 0 !important;
                overflow: hidden !important;
                text-indent: -10000in !important;
            }
            cufon canvas
            {
                position: relative !important;
            }
        }
        @media print
        {
            cufon
            {
                padding: 0 !important;
            }
            cufon canvas
            {
                display: none !important;
            }
        }
    </style>
    <script type="text/javascript" src="Scripts/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="Scripts/jquery.main.js"></script>
    <script type="text/javascript" src="Scripts/cufon.js"></script>
    <script type="text/javascript" src="Scripts/cufon-fonts.js"></script>
    <script type="text/javascript" src="Scripts/cufon-settings.js"></script>
    <!--[if lt IE 8]><link rel="stylesheet" type="text/css" href="assets/css/ie.css" media="screen"/><![endif]-->
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div id="wrapper">
            <!-- main -->
            <div id="main">
                <div class="main-holder">
                    <!-- content -->
                    <div id="content">
                        <div class="content-area container_12">
                            <h1 class="logo vcard">
                                <a class="fn org url" rel="inner" href="Default.aspx"></a>
                            </h1>
                            <div class="content-holder">
                                <div class="content-frame loginSuccess-holder">
                                    <div class="login-box page-main page-active" style="opacity: 1;">
                                        <div class="heading-holder">
                                            <h2>
                                                <span>
                                                    <cufon class="cufon cufon-canvas" alt="Teachers" style="width: 270px; height: 50px;"><canvas width="298" height="51" style="width: 298px; height: 51px; top: 2px; left: -3px;"></canvas><cufontext>Teachers</cufontext></cufon>
                                                </span>
                                            </h2>
                                        </div>
                                        <div>
                                            <fieldset>
                                                <div class="row">
                                                    <label for="Username">
                                                        Username</label>
                                                    <span class="text">
                                                        <input id="Username" class="required" name="username" type="text" value="" tabindex="1"></span>
                                                </div>
                                                <div class="row">
                                                    <a href="#" class="forgot">Forgot your password?</a>
                                                    <label for="Password">
                                                        Password</label>
                                                    <span class="text">
                                                        <input id="Password" class="required" name="password" type="password" value="" tabindex="2"
                                                            style="display: inline-block;"><input type="text" style="display: none;"></span>
                                                </div>
                                                <div class="check-holder">
                                                    <div class="check-frame">
                                                        <input id="Show-password" name="show" type="checkbox" class="check">
                                                        <label for="Show-password">
                                                            Show password</label>
                                                    </div>
                                                </div>
                                                <div class="check-container">
                                                    <input id="Remember" type="checkbox" name="rememberme" class="check" value="1">
                                                    <label for="Remember">
                                                        Remember me</label>
                                                </div>
                                                <a href="#" class="button">
                                                    <cufon class="cufon cufon-canvas" alt="Login" style="width: 102px; height: 32px;"><canvas width="115" height="34" style="width: 115px; height: 34px; top: 1px; left: -3px;"></canvas><cufontext>Login</cufontext></cufon>
                                                </a>
                                                <input type="submit" class="hidden" value="Login" tabindex="3">
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="login-box page-success" style="opacity: 0;">
                                        <div class="login-box-holder">
                                            <span class="success">Login successful</span>
                                        </div>
                                    </div>
                                    <div class="login-box page-failure" style="opacity: 0;">
                                        <div class="login-box-holder">
                                            <span class="fail">Invalid login. &nbsp;&nbsp;<a class="page-back" href="#">Try again?</a></span>
                                        </div>
                                    </div>
                                    <div class="login-box page-password" style="opacity: 0;">
                                        <div class="heading-holder">
                                            <h2>
                                                <span>
                                                    <cufon class="cufon cufon-canvas" alt="Teachers" style="width: 270px; height: 50px;"><canvas width="298" height="51" style="width: 298px; height: 51px; top: 2px; left: -3px;"></canvas><cufontext>Teachers</cufontext></cufon>
                                                </span>
                                            </h2>
                                        </div>
                                        <div class="text-holder">
                                            <p>
                                                If we have it on file we’ll send it along.</p>
                                        </div>
                                        <div>
                                            <fieldset>
                                                <div class="row">
                                                    <label for="email">
                                                        Email</label>
                                                    <span class="text padding">
                                                        <input id="email" name="email" class="required-email" type="text"></span>
                                                </div>
                                                <a href="#" class="button">
                                                    <cufon class="cufon cufon-canvas" alt="SEND" style="width: 85px; height: 32px;"><canvas width="99" height="34" style="width: 99px; height: 34px; top: 1px; left: -3px;"></canvas><cufontext>SEND</cufontext></cufon>
                                                </a>
                                                <input type="submit" class="hidden" value="SEND">
                                                <span class="nevermind"><a href="#">Oh, nevermind.</a></span>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="login-box page-password-success" style="opacity: 0;">
                                        <div class="login-box-holder">
                                            <span class="success">Your login info has been emailed to you</span> <span class="return">
                                                <a class="home-back" href="#">Return to login?</a></span>
                                        </div>
                                    </div>
                                    <div class="login-box page-password-failure" style="opacity: 0;">
                                        <div class="login-box-holder">
                                            <span class="fail">That email is not register with us.</span> <span class="return"><a
                                                class="mail-back" href="#">Try again?</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- header -->
                    <div id="header">
                        <div class="header-area container_12 clearfix">
                            <div class="grid_12">
                                <!-- login -->
                                <a href="LoginStudent.aspx" class="login-link"><span>
                                    <cufon class="cufon cufon-canvas" alt="Student " style="width: 61px; height: 16px;"><canvas width="75" height="16" style="width: 75px; height: 16px; top: 1px; left: -1px;"></canvas><cufontext>Student </cufontext></cufon>
                                    <cufon class="cufon cufon-canvas" alt="login" style="width: 37px; height: 16px;"><canvas width="46" height="16" style="width: 46px; height: 16px; top: 1px; left: -1px;"></canvas><cufontext>login</cufontext></cufon>
                                </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer -->
            <div id="footer">
                <div class="footer-holder">
                    <div class="footer-frame">
                        <div class="footer-container">
                            <p>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
