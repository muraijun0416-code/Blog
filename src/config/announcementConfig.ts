import type { AnnouncementConfig } from "../types/config";

// 掲示板の設定
export const announcementConfig: AnnouncementConfig = {
	title: "こんにちは〜", 
// お知らせのタイトル。プレースホルダーにはi18n文字列キー「announcement」を使用します。
	content: "ブログへようこそ！これはサンプルの告知です", 
// お知らせの内容
	closable: true, // ユーザーが告知を閉じることを許可する
	link: {
		enable: true, // リンクを有効にする

		text: "Learn More", // リンクテキスト
		url: "/about/", // リンクURL
		external: false, // 内部リンク
	},
};
