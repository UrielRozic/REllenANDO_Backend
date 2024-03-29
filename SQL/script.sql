USE [master]
GO
/****** Object:  Database [REllenANDO]    Script Date: 24/6/2022 11:41:29 ******/
CREATE DATABASE [REllenANDO]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'REllenANDO', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\REllenANDO.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'REllenANDO_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\REllenANDO_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [REllenANDO] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [REllenANDO].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [REllenANDO] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [REllenANDO] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [REllenANDO] SET ANSI_PADDING OFF 1
GO
ALTER DATABASE [REllenANDO] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [REllenANDO] SET ARITHABORT OFF 
GO
ALTER DATABASE [REllenANDO] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [REllenANDO] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [REllenANDO] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [REllenANDO] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [REllenANDO] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [REllenANDO] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [REllenANDO] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [REllenANDO] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [REllenANDO] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [REllenANDO] SET  DISABLE_BROKER 
GO
ALTER DATABASE [REllenANDO] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [REllenANDO] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [REllenANDO] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [REllenANDO] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [REllenANDO] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [REllenANDO] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [REllenANDO] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [REllenANDO] SET RECOVERY FULL 
GO
ALTER DATABASE [REllenANDO] SET  MULTI_USER 
GO
ALTER DATABASE [REllenANDO] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [REllenANDO] SET DB_CHAINING OFF 
GO
ALTER DATABASE [REllenANDO] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [REllenANDO] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [REllenANDO] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'REllenANDO', N'ON'
GO
ALTER DATABASE [REllenANDO] SET QUERY_STORE = OFF
GO
USE [REllenANDO]
GO
/****** Object:  User [rellenando]    Script Date: 24/6/2022 11:41:29 ******/
CREATE USER [rellenando] FOR LOGIN [rellenando] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 24/6/2022 11:41:29 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [rellenando]
GO
/****** Object:  Table [dbo].[Contenidos]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contenidos](
	[Id_Contenido] [int] NOT NULL,
	[contenido] [varchar](50) NULL,
	[descripcion] [varchar](50) NULL,
	[edad] [int] NULL,
 CONSTRAINT [PK_Contenidos] PRIMARY KEY CLUSTERED 
(
	[Id_Contenido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContenidosGrupo]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContenidosGrupo](
	[Id_Grupo] [int] NOT NULL,
	[Id_Contenido] [int] NOT NULL,
 CONSTRAINT [PK_ContenidosGrupo] PRIMARY KEY CLUSTERED 
(
	[Id_Grupo] ASC,
	[Id_Contenido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ContenidosUsuario]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContenidosUsuario](
	[Id_Usuario] [int] NOT NULL,
	[Id_Contenido] [int] NOT NULL,
 CONSTRAINT [PK_ContenidosUsuario] PRIMARY KEY CLUSTERED 
(
	[Id_Usuario] ASC,
	[Id_Contenido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GruposPrivados]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GruposPrivados](
	[Id_Grupo] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[descripcion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_GruposPrivados] PRIMARY KEY CLUSTERED 
(
	[Id_Grupo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Juegos]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Juegos](
	[Id_Juego] [int] NOT NULL,
	[lugar] [varchar](50) NULL,
	[descripcion] [varchar](max) NULL,
	[duracion] [int] NULL,
	[Id_Contenido] [int] NOT NULL,
	[nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Juegos] PRIMARY KEY CLUSTERED 
(
	[Id_Juego] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[Id_Pregunta] [int] NOT NULL,
	[contenido] [varchar](50) NOT NULL,
	[descripcion] [varchar](50) NOT NULL,
	[Id_Contenido] [int] NOT NULL,
 CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED 
(
	[Id_Pregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuesta]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuesta](
	[Id_Respuesta] [int] NOT NULL,
	[contenido] [varchar](50) NOT NULL,
	[correcta] [bit] NOT NULL,
	[Id_Pregunta] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id_Usuario] [int] NOT NULL,
	[email] [varchar](50) NOT NULL,
	[contraseñe] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id_Usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarioxgrupo]    Script Date: 24/6/2022 11:41:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarioxgrupo](
	[Id_Usuario] [int] NOT NULL,
	[Id_Grupo] [int] NOT NULL,
	[administrador] [bit] NOT NULL,
 CONSTRAINT [PK_Usuarioxgrupo] PRIMARY KEY CLUSTERED 
(
	[Id_Usuario] ASC,
	[Id_Grupo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Contenidos] ([Id_Contenido], [contenido], [descripcion], [edad]) VALUES (1, N'juego', N'', 4)
INSERT [dbo].[Contenidos] ([Id_Contenido], [contenido], [descripcion], [edad]) VALUES (2, N'juego', NULL, 10)
INSERT [dbo].[Contenidos] ([Id_Contenido], [contenido], [descripcion], [edad]) VALUES (3, N'juego', NULL, 15)
GO
INSERT [dbo].[Juegos] ([Id_Juego], [lugar], [descripcion], [duracion], [Id_Contenido], [nombre]) VALUES (1, N'aire libre', N'Las personas estan divididas en 2 equipos. Tienen una pelota, y el equipo que logra hacer 10 pases seguidos sin que la toque alguien del otro equipo o se caiga al piso gana.', 30, 1, N'10 pases')
INSERT [dbo].[Juegos] ([Id_Juego], [lugar], [descripcion], [duracion], [Id_Contenido], [nombre]) VALUES (2, N'sala/aire libre', N'Se escriben los nombres de todas las personas en papeles chiquitos y se mezclan. Despues se divide a la ronda en dos equipos, para que queden intercalados, y se eligen 4 asientos de la ronda para que sean la Cúpula. Tambien se deja un espacio libre. Se reparten al azar los papeles con los nombres, y el que esta a la derecha del asiento libre tiene que llamar a alguien para que vaya ahi (sin saber a quien llama). Quedo otro espacio libre en la ronda y se siguen llamando. Gana el equipo que ocupa los 4 asientos de la cupula.', 30, 2, N'Cupula')
INSERT [dbo].[Juegos] ([Id_Juego], [lugar], [descripcion], [duracion], [Id_Contenido], [nombre]) VALUES (3, N'aire libre', N'Las personas juegan individualmente. Se tienen que quemar con una pelota, y los quemados se tienen que sentar en el lugar. Para levantarse y seguir jugando tienen que agarrar la pelota o que alguien queme al que los quemo.', 40, 3, N'Mancha pelota')
GO
ALTER TABLE [dbo].[ContenidosGrupo]  WITH CHECK ADD  CONSTRAINT [FK_ContenidosGrupo_Contenidos] FOREIGN KEY([Id_Contenido])
REFERENCES [dbo].[Contenidos] ([Id_Contenido])
GO
ALTER TABLE [dbo].[ContenidosGrupo] CHECK CONSTRAINT [FK_ContenidosGrupo_Contenidos]
GO
ALTER TABLE [dbo].[ContenidosGrupo]  WITH CHECK ADD  CONSTRAINT [FK_ContenidosGrupo_GruposPrivados] FOREIGN KEY([Id_Grupo])
REFERENCES [dbo].[GruposPrivados] ([Id_Grupo])
GO
ALTER TABLE [dbo].[ContenidosGrupo] CHECK CONSTRAINT [FK_ContenidosGrupo_GruposPrivados]
GO
ALTER TABLE [dbo].[ContenidosUsuario]  WITH CHECK ADD  CONSTRAINT [FK_ContenidosUsuario_Contenidos] FOREIGN KEY([Id_Contenido])
REFERENCES [dbo].[Contenidos] ([Id_Contenido])
GO
ALTER TABLE [dbo].[ContenidosUsuario] CHECK CONSTRAINT [FK_ContenidosUsuario_Contenidos]
GO
ALTER TABLE [dbo].[ContenidosUsuario]  WITH CHECK ADD  CONSTRAINT [FK_ContenidosUsuario_Usuario] FOREIGN KEY([Id_Usuario])
REFERENCES [dbo].[Usuario] ([Id_Usuario])
GO
ALTER TABLE [dbo].[ContenidosUsuario] CHECK CONSTRAINT [FK_ContenidosUsuario_Usuario]
GO
ALTER TABLE [dbo].[Juegos]  WITH CHECK ADD  CONSTRAINT [FK_Juegos_Contenidos] FOREIGN KEY([Id_Contenido])
REFERENCES [dbo].[Contenidos] ([Id_Contenido])
GO
ALTER TABLE [dbo].[Juegos] CHECK CONSTRAINT [FK_Juegos_Contenidos]
GO
ALTER TABLE [dbo].[Preguntas]  WITH CHECK ADD  CONSTRAINT [FK_Preguntas_Contenidos] FOREIGN KEY([Id_Contenido])
REFERENCES [dbo].[Contenidos] ([Id_Contenido])
GO
ALTER TABLE [dbo].[Preguntas] CHECK CONSTRAINT [FK_Preguntas_Contenidos]
GO
ALTER TABLE [dbo].[Respuesta]  WITH CHECK ADD  CONSTRAINT [FK_Respuesta_Preguntas] FOREIGN KEY([Id_Pregunta])
REFERENCES [dbo].[Preguntas] ([Id_Pregunta])
GO
ALTER TABLE [dbo].[Respuesta] CHECK CONSTRAINT [FK_Respuesta_Preguntas]
GO
ALTER TABLE [dbo].[Usuarioxgrupo]  WITH CHECK ADD  CONSTRAINT [FK_Usuarioxgrupo_GruposPrivados] FOREIGN KEY([Id_Grupo])
REFERENCES [dbo].[GruposPrivados] ([Id_Grupo])
GO
ALTER TABLE [dbo].[Usuarioxgrupo] CHECK CONSTRAINT [FK_Usuarioxgrupo_GruposPrivados]
GO
ALTER TABLE [dbo].[Usuarioxgrupo]  WITH CHECK ADD  CONSTRAINT [FK_Usuarioxgrupo_Usuario] FOREIGN KEY([Id_Grupo])
REFERENCES [dbo].[Usuario] ([Id_Usuario])
GO
ALTER TABLE [dbo].[Usuarioxgrupo] CHECK CONSTRAINT [FK_Usuarioxgrupo_Usuario]
GO
USE [master]
GO
ALTER DATABASE [REllenANDO] SET  READ_WRITE 
GO
