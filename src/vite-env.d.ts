/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_POCKETBASE_URL: string;
	readonly VITE_MAIL_TO_ADMIN: string;	
}

interface ImportMetaEnv {
	readonly env: ImportMetaEnv;
}
