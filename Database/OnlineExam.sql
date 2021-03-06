USE [master]
GO
/****** Object:  Database [OnlineExam]    Script Date: 4.12.2013 17:18:59 ******/
CREATE DATABASE [OnlineExam]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'onlineExam', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\onlineExam.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'onlineExam_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\onlineExam_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [OnlineExam] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [OnlineExam].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [OnlineExam] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [OnlineExam] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [OnlineExam] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [OnlineExam] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [OnlineExam] SET ARITHABORT OFF 
GO
ALTER DATABASE [OnlineExam] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [OnlineExam] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [OnlineExam] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [OnlineExam] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [OnlineExam] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [OnlineExam] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [OnlineExam] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [OnlineExam] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [OnlineExam] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [OnlineExam] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [OnlineExam] SET  DISABLE_BROKER 
GO
ALTER DATABASE [OnlineExam] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [OnlineExam] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [OnlineExam] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [OnlineExam] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [OnlineExam] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [OnlineExam] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [OnlineExam] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [OnlineExam] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [OnlineExam] SET  MULTI_USER 
GO
ALTER DATABASE [OnlineExam] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [OnlineExam] SET DB_CHAINING OFF 
GO
ALTER DATABASE [OnlineExam] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [OnlineExam] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [OnlineExam]
GO
/****** Object:  Table [dbo].[tbl_Categories]    Script Date: 4.12.2013 17:18:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Categories](
	[CategoryID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NULL,
	[SubCategoryID] [int] NULL,
 CONSTRAINT [PK_tbl_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tbl_ExamResult]    Script Date: 4.12.2013 17:18:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ExamResult](
	[ExamResultID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[CategoryID] [int] NULL,
	[NumberOfCorrect] [int] NULL,
	[NumberOfQuestion] [int] NULL,
	[StartDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_ExamResult] PRIMARY KEY CLUSTERED 
(
	[ExamResultID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tbl_Exams]    Script Date: 4.12.2013 17:18:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Exams](
	[ExamID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryID] [int] NULL,
	[ExamName] [nvarchar](200) NULL,
	[ExamTime] [int] NULL,
	[NumberOfQuestion] [int] NULL,
 CONSTRAINT [PK_tbl_Exams] PRIMARY KEY CLUSTERED 
(
	[ExamID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tbl_Questions]    Script Date: 4.12.2013 17:18:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tbl_Questions](
	[QuestionID] [int] IDENTITY(1,1) NOT NULL,
	[ExamID] [int] NULL,
	[UserID] [int] NULL,
	[Question] [nvarchar](max) NULL,
	[Answer1] [nvarchar](2000) NULL,
	[Answer2] [nvarchar](2000) NULL,
	[Answer3] [nvarchar](2000) NULL,
	[Answer4] [nvarchar](2000) NULL,
	[Answer5] [nvarchar](2000) NULL,
	[CorrectAnswer] [char](1) NULL,
	[ImageUrl] [nvarchar](200) NULL,
 CONSTRAINT [PK_tbl_Questions] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Users]    Script Date: 4.12.2013 17:18:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Users](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](20) NULL,
	[Password] [nvarchar](20) NULL,
	[FullName] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[LastLoginDate] [datetime] NULL,
	[Authory] [int] NULL,
 CONSTRAINT [PK_tbl_Users] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[tbl_ExamResult]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ExamResult_tbl_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[tbl_Categories] ([CategoryID])
GO
ALTER TABLE [dbo].[tbl_ExamResult] CHECK CONSTRAINT [FK_tbl_ExamResult_tbl_Categories]
GO
ALTER TABLE [dbo].[tbl_ExamResult]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ExamResult_tbl_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[tbl_Users] ([UserID])
GO
ALTER TABLE [dbo].[tbl_ExamResult] CHECK CONSTRAINT [FK_tbl_ExamResult_tbl_Users]
GO
ALTER TABLE [dbo].[tbl_Exams]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Exams_tbl_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[tbl_Categories] ([CategoryID])
GO
ALTER TABLE [dbo].[tbl_Exams] CHECK CONSTRAINT [FK_tbl_Exams_tbl_Categories]
GO
ALTER TABLE [dbo].[tbl_Questions]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Questions_tbl_Exams] FOREIGN KEY([ExamID])
REFERENCES [dbo].[tbl_Exams] ([ExamID])
GO
ALTER TABLE [dbo].[tbl_Questions] CHECK CONSTRAINT [FK_tbl_Questions_tbl_Exams]
GO
ALTER TABLE [dbo].[tbl_Questions]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Questions_tbl_Users] FOREIGN KEY([UserID])
REFERENCES [dbo].[tbl_Users] ([UserID])
GO
ALTER TABLE [dbo].[tbl_Questions] CHECK CONSTRAINT [FK_tbl_Questions_tbl_Users]
GO
USE [master]
GO
ALTER DATABASE [OnlineExam] SET  READ_WRITE 
GO
