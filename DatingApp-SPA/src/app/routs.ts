import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MemberListComponent} from "./member-list/member-list.component";
import { MessagesComponent} from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGaurd } from "./_gaurds/auth.gaurd";


export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGaurd],
    children: [
      { path: "members", component: MemberListComponent },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },

  { path: "**", redirectTo: "", pathMatch: "full" }
];
