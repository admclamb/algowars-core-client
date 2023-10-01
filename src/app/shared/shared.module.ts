import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { LoginButtonComponent } from './components/button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/button/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/button/signup-button/signup-button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { RouterModule } from '@angular/router';
import { NavbarCanvasComponent } from './components/navbar/navbar-canvas/navbar-canvas.component';
import { NavbarCanvasSignedInComponent } from './components/navbar/navbar-canvas/navbar-canvas-signed-in/navbar-canvas-signed-in.component';
import { NavbarCanvasNotSignedInComponent } from './components/navbar/navbar-canvas/navbar-canvas-not-signed-in/navbar-canvas-not-signed-in.component';
import { ProblemsTableComponent } from './components/problems/problems-table/problems-table.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ProblemQuestionComponent } from './components/problem/problem-question/problem-question.component';
import { ProblemCodeComponent } from './components/problem/problem-code/problem-code.component';
import { ProblemTestComponent } from './components/problem/problem-test/problem-test.component';
import { ProblemQuestionParserComponent } from './components/problem/problem-question/problem-question-parser/problem-question-parser.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AvatarComponent,
    ClickOutsideDirective,
    NavbarCanvasComponent,
    NavbarCanvasSignedInComponent,
    NavbarCanvasNotSignedInComponent,
    ProblemsTableComponent,
    CodeEditorComponent,
    ProblemQuestionComponent,
    ProblemCodeComponent,
    ProblemTestComponent,
    ProblemQuestionParserComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
