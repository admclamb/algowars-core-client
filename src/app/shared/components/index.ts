import { Auth0FeatureComponent } from './auth0-feature.component';
import { Auth0FeaturesComponent } from './auth0-features.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { CodeSnippetComponent } from './code-snippet.component';
import { ERRORS_COMPONENTS } from './errors';
import { HeroBannerComponent } from './hero-banner.component';
import { NAVBAR_COMPONENTS } from './navbar';
import { NAVIGATION_COMPONENTS } from './navigation';
import { PageFooterHyperlinkComponent } from './page-footer-hyperlink.component';
import { PageFooterComponent } from './page-footer.component';
import { PageLayoutComponent } from './page-layout.component';
import { PageLoaderComponent } from './page-loader.component';
import { PROBLEM_COMPONENTS } from './problem';
import { PROBLEMS_COMPONENTS } from './problems';

export const COMPONENTS = [
  ...NAVIGATION_COMPONENTS,
  Auth0FeatureComponent,
  Auth0FeaturesComponent,
  CodeSnippetComponent,
  HeroBannerComponent,
  PageFooterHyperlinkComponent,
  PageFooterComponent,
  PageLayoutComponent,
  PageLoaderComponent,
  AvatarComponent,
  CodeEditorComponent,
  ERRORS_COMPONENTS,
  NAVBAR_COMPONENTS,
  PROBLEM_COMPONENTS,
  PROBLEMS_COMPONENTS,
];
