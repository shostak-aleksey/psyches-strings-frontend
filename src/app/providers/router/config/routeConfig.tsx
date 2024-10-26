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
  getRouteMBTI,
  getRouteEightSpheresOfLife,
  getRouteEnneagramma,
  getRouteREASIC,
  getRouteRecommendations,
  getRouteResults,
  getRouteTestInfo,
  getRouteTypes,
  getRouteTest,
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
import { EightSpheresOfLifePage } from '@/pages/EightSpheresOfLifePage';
import { EnneagrammaPage } from '@/pages/EnneagrammaPage';
import { MBTIPage } from '@/pages/MBTIPage';
import { REASICPage } from '@/pages/REASICPage';
import { ResultsPage } from '@/pages/ResultsPage';
import { TestInfoPage } from '@/pages/TestInfoPage';
import { TypesPage } from '@/pages/TypesPage';
import { RecommendationsPage } from '@/pages/RecommendationsPage';
import { TestPage } from '@/pages/TestPage';
import { MainPage } from '@/pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <TestsPage />,
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
  [AppRoutes.COURSE]: {
    path: getRouteCourse(':id'),
    element: <CoursePage />,
  },
  [AppRoutes.COURSES]: {
    path: getRouteCourses(),
    element: <CoursesPage />,
  },
  [AppRoutes.MBTI]: {
    path: getRouteMBTI(),
    element: <MBTIPage />,
  },
  [AppRoutes.REASIC]: {
    path: getRouteREASIC(),
    element: <REASICPage />,
  },
  [AppRoutes.ENNEAGRAMMA]: {
    path: getRouteEnneagramma(),
    element: <EnneagrammaPage />,
  },
  [AppRoutes.EIGHT_SPHERES_OF_LIFE]: {
    path: getRouteEightSpheresOfLife(),
    element: <EightSpheresOfLifePage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':userId'),
    element: <ProfilePage />,
  },
  [AppRoutes.TESTS]: {
    path: getRouteTests(),
    element: <TestsPage />,
  },
  [AppRoutes.TEST]: {
    path: getRouteTest(':testId'),
    element: <TestPage />,
  },
  [AppRoutes.RESULTS]: {
    path: getRouteResults(':testId', ':userId'),
    element: <ResultsPage />,
  },
  [AppRoutes.TEST_INFO]: {
    path: getRouteTestInfo(':testId'),
    element: <TestInfoPage />,
  },
  [AppRoutes.TYPES]: {
    path: getRouteTypes(':typeId'),
    element: <TypesPage />,
  },
  [AppRoutes.RECOMMENDATIONS]: {
    path: getRouteRecommendations(),
    element: <RecommendationsPage />,
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
  [AppRoutes.ARTICLE_EDIT]: {
    path: '/main',
    element: <MainPage />,
    authOnly: true,
  },
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
