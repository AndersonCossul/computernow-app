import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { ComputerComponent } from './computer/computer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'answers', component: AnswersComponent },
  { path: 'computers', component: ComputerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
