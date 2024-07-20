import { TodoDataType } from "../../../Type/Application/Todo/Todo";
import {
  AllTask,
  Completed,
  InProcess,
  Pending,
  TrashHeading,
} from "../../../utils/Constant";

export const sideBartList = [
  { color: "primary", icon: "file-plus", tittle: AllTask },
  { color: "success", icon: "check-circle", tittle: Completed, badge: true },
  { color: "danger", icon: "cast", tittle: Pending, badge: true },
  { color: "info", icon: "activity", tittle: InProcess, badge: true },
  { color: "danger", icon: "trash", tittle: TrashHeading },
];

export const todoListData: TodoDataType[] = [
  {
    id: 0,
    status: "pending",
    title: "Check validation involves making sure all your tags are properly closed and nested.",
    badge: "In Progress",
    badgeClass: "light-primary",
    timeLimit: "10 Nov",
  },
  {
    id: 1,
    status: "pending",
    title: "Test the outgoing links from all the pages to the specific domain under test.",
    badge: "Pending",
    badgeClass: "light-danger",
    timeLimit: "04 Aug",
  },
  {
    id: 2,
    status: "completed",
    title: "Test links are used to send emails to admin or other users from web pages.",
    badge: "Done",
    badgeClass: "light-success",
    timeLimit: "25 Feb",
  },
  {
    id: 3,
    status: "pending",
    title: "Options to create forms, if any, form deletes a view or modify the forms.",
    badge: "In Progress",
    badgeClass: "light-primary",
    timeLimit: "15 Dec",
  },
  {
    id: 4,
    status: "pending",
    title: "Wrong inputs in the forms to the fields in the forms.",
    badge: "Pending",
    badgeClass: "light-danger",
    timeLimit: "11 Nov",
  },
  {
    id: 5,
    status: "pending",
    title: "Check if the instructions provided are perfect to satisfy its purpose.",
    badge: "Pending",
    badgeClass: "light-danger",
    timeLimit: "04 Sept",
  },
  {
    id: 6,
    status: "completed",
    title: "Application server and Database server interface.",
    badge: "Done",
    badgeClass: "light-success",
    timeLimit: "08 July",
  }
];
