import { NAVBAR_COMPONENTS } from './navbar';
import { BUTTON_COMPONENTS } from './button';
import { AvatarComponent } from './avatar/avatar.component';
import { PROBLEMS_COMPONENTS } from './problems';
import { PROBLEM_COMPONENTS } from './problem';
import { CODE_EDITOR_COMPONENTS } from './code-editor';
import { ERRORS_COMPONENTS } from './errors';

export const COMPONENTS = [
  ...NAVBAR_COMPONENTS,
  ...BUTTON_COMPONENTS,
  ...PROBLEMS_COMPONENTS,
  ...PROBLEM_COMPONENTS,
  ...CODE_EDITOR_COMPONENTS,
  AvatarComponent,
  ...ERRORS_COMPONENTS,
];
