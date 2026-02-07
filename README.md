# タスク管理ツール  
純粋なHTML、CSS、TSで実装したシンプルなタスク管理ツールです
## 修正点、変更点  
cssの装飾
## 学んだこと  
npm init -yこれでpackage.jsonの作成  
npm install -D typescript vite これでts、vite（node_modules）のインストール  
npx tsc --init これでtsのルールが記載されているtsconfig.jsonのインストール  

githubのリポジトリ名を間違えたときは  
git remote -v これでリモートリポジトリ名の確認  
github側でリポジトリ名の編集  
git remote set-url origin url名 これで変更できる  

import type {インターフェイス名} from "相対パス";  これで別ファイルから型定義を持ってこれる  
データ側の状態と画面側の状態を合わせないとうまくできないことが分かった  
## 所感  
tsの初期の構築がスムーズにできた  
gitのコマンドがスムーズにできた  
リモートリポジトリ名にスペルミスがあったが修正できた  
割とスムーズに前回までのリポジトリと同様くらいもしかしたらそれ以上のクオリティのCSSが実装できた  