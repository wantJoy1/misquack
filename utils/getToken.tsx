import { v4 as uuidv4 } from "uuid";

type QueryParams = {
  name?: string;
  icon?: URL;
  callback?: URL;
  permission?: Permission[];
};

type Permission =
  | "read:account"
  | "write:account"
  | "read:blocks"
  | "write:blocks"
  | "read:drive"
  | "write:drive"
  | "read:favorites"
  | "write:favorites"
  | "read:following"
  | "write:following"
  | "read:messaging"
  | "write:messaging"
  | "read:mutes"
  | "write:mutes"
  | "write:notes"
  | "read:notifications"
  | "write:notifications"
  | "write:reactions"
  | "write:votes"
  | "read:pages"
  | "write:pages"
  | "write:page-likes"
  | "read:page-likes"
  | "write:gallery-likes"
  | "read:gallery-likes";
