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

const joinedPermission = (permission: Permission[]) => {
  return permission.join(",");
};

const getSession = async () => {
  const baseUrl = "http://192.168.13.101:30100";
  const uuid = uuidv4();
  const queryParams: QueryParams = {
    name: "Misquack",
    permission: ["write:notes", "read:account"],
  };

  const authenticationUrl = `https://${baseUrl}/miauth/${uuid}`;
  return (
    await fetch(`http://192.168.13.101:30100/api/miauth/${uuid}/check`, {
      method: "POST",
    })
  ).json();
};

/*
  # こんな面倒くさいことやらずに、ブラウザから直接アクセストークンを取得したほうがよい

  # UUIDは使い回さないことが前提
  # 確認も一度しかできない
  # 一度アクセストークンを閲覧するための
  # URL(http://{server}/miauth/{uuid}/check
  # にアクセスした後、同じUUIDでアクセスするとエラーになる

  node
  .load 'utils/get_token.js'
  res()
*/
