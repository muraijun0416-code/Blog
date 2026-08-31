import type { CommentConfig } from "../types/config";
import { SITE_LANG } from "./siteConfig";

// コメントシステムの構成
export const commentConfig: CommentConfig = {
	enable: false, // コメント機能を有効にします。falseに設定すると、コメントコンポーネントは記事エリアに表示されません。
	system: "twikoo", // コメントシステムの選択: "twikoo" | "giscus"
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "your-github-username/your-repo-name",
		repoId: "your-repo-id",
		category: "Announcements",
		categoryId: "your-category-id",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy",
	},
};
