import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
// import { ArticlesPage } from '@/pages/ArticlesPage';
// import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
// import { ArticleEditPage } from '@/pages/ArticleEditPage';
// import { AdminPanelPage } from '@/pages/AdminPanelPage';
// import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  AppRoutes,
  getRouteLogin,
  getRouteMain,
  getRouteRegistration,
  getRouteAbout,
  //   getRouteAdmin,
  //   getRouteArticleCreate,
  //   getRouteArticleDetails,
  //   getRouteArticleEdit,
  getRouteForbidden,
  getRouteProfile,
  getRouteCourse,
  getRouteCourses,
  getRouteTests,
  //   getRouteArticles,
  //   getRouteProfile,
  //   getRouteSettings,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
// import { SettingsPage } from '@/pages/SettingsPage';
import { LoginPage } from '@/pages/loginPage/ui/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { CoursePage } from '@/pages/CoursePage';
import { CoursesPage } from '@/pages/CoursesPage';
import { TestsPage } from '@/pages/TestsPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: getRouteRegistration(),
    element: <RegistrationPage />,
  },

  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  // [AppRoutes.SETTINGS]: {
  //     path: getRouteSettings(),
  //     element: <SettingsPage />,
  // },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
  },
  [AppRoutes.COURSE]: {
    path: getRouteCourse(':id'),
    element: <CoursePage />,
  },
  [AppRoutes.COURSES]: {
    path: getRouteCourses(),
    element: <CoursesPage />,
  },
  [AppRoutes.TESTS]: {
    path: getRouteTests(),
    element: <TestsPage />,
  },
  // [AppRoutes.ARTICLES]: {
  //     path: getRouteArticles(),
  //     element: <ArticlesPage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ARTICLE_DETAILS]: {
  //     path: getRouteArticleDetails(':id'),
  //     element: <ArticleDetailsPage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ARTICLE_CREATE]: {
  //     path: getRouteArticleCreate(),
  //     element: <ArticleEditPage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ARTICLE_EDIT]: {
  //     path: getRouteArticleEdit(':id'),
  //     element: <ArticleEditPage />,
  //     authOnly: true,
  // },
  // [AppRoutes.ADMIN_PANEL]: {
  //     path: getRouteAdmin(),
  //     element: <AdminPanelPage />,
  //     authOnly: true,
  //     roles: [UserRole.MANAGER, UserRole.ADMIN],
  // },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
