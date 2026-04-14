# DESIGN.md — 警備法定書類管理システム（M Protect Cloud）

> このファイルはプロジェクトのデザインシステムを定義します。
> AIエージェントはUIを生成する際、このファイルを参照して一貫性のあるデザインを実現してください。

---

## 1. ビジュアルテーマと雰囲気

**全体のムード：** エンタープライズSaaS — 落ち着いていて、信頼感があり、権威ある印象。  
法令遵守が重視される警備業界に適した、明快さと信頼性を第一とするデザイン。

**設計思想：**
- 情報密度が高いレイアウトに、明確な視覚的階層をもたせる
- ニュートラルなベースカラーに、戦略的なブルーをアクセントとして1色だけ使う
- 余白は意図的に使う — データが密集する箇所は詰め、ヘッダーや見出しは広めに取る
- 装飾のための要素は使わない。すべての視覚要素に機能的な意味を持たせる
- **ダークサイドバー＋ライトコンテンツエリア** — モダンなダッシュボードアプリの標準構成

**密度：** 中〜高。テーブルやフォームはデータを効率よく詰め込む。カードは24pxのパディングで余裕を持たせる。

**トーン：** プロフェッショナルな日本語業務システム。清潔で、かつ温かみのある印象。押しつけがましくなく、自信に満ちたデザイン。

---

## 2. カラーパレットと役割

### ベースカラー

| トークン名         | カラーコード | Tailwindクラス  | 用途                                          |
|--------------------|--------------|-----------------|-----------------------------------------------|
| `primary`          | `#2563EB`    | `blue-600`      | CTAボタン、アクティブナビ、リンク、バッジ     |
| `primary-dark`     | `#1D4ED8`    | `blue-700`      | ボタンのホバー状態                            |
| `primary-light`    | `#EFF6FF`    | `blue-50`       | 選択行の背景、サブナビのアクティブ背景        |
| `surface-base`     | `#F8FAFC`    | `slate-50`      | ページ背景                                    |
| `surface-card`     | `#FFFFFF`    | `white`         | カード、モーダル、サイドバーの背景            |
| `border`           | `#E2E8F0`    | `slate-200`     | カードの枠線、区切り線、テーブル行            |
| `border-subtle`    | `#F1F5F9`    | `slate-100`     | 内側の区切り線、アコーディオンの枠線          |

### テキスト

| トークン名           | カラーコード | Tailwindクラス | 用途                                     |
|----------------------|--------------|----------------|------------------------------------------|
| `text-primary`       | `#0F172A`    | `slate-900`    | 見出し、ラベル、主要コンテンツ           |
| `text-secondary`     | `#475569`    | `slate-600`    | サブラベル、メタデータ、補足テキスト     |
| `text-muted`         | `#94A3B8`    | `slate-400`    | プレースホルダー、無効状態、キャプション |
| `text-on-dark`       | `#FFFFFF`    | `white`        | ダークサイドバーやプライマリボタン上のテキスト |

### サイドバー（ダーク）

| トークン名                | カラーコード | Tailwindクラス | 用途                           |
|---------------------------|--------------|----------------|--------------------------------|
| `sidebar-bg`              | `#0F172A`    | `slate-900`    | サイドバー背景                 |
| `sidebar-active`          | `#1E293B`    | `slate-800`    | アクティブなナビ項目の背景     |
| `sidebar-hover`           | `#1E293B`    | `slate-800`    | ナビ項目のホバー               |
| `sidebar-text`            | `#CBD5E1`    | `slate-300`    | 通常のナビ項目テキスト         |
| `sidebar-text-active`     | `#FFFFFF`    | `white`        | アクティブなナビ項目テキスト   |
| `sidebar-icon`            | `#60A5FA`    | `blue-400`     | ダークサイドバー上のアイコン   |

### ステータスカラー（意味を持つ色）

| トークン名    | カラーコード | Tailwindクラス  | 用途                                           |
|---------------|--------------|-----------------|------------------------------------------------|
| `success`     | `#059669`    | `emerald-600`   | 完了ステータス、正常な値                       |
| `success-bg`  | `#ECFDF5`    | `emerald-50`    | 完了バッジ・チップの背景                       |
| `warning`     | `#D97706`    | `amber-600`     | アラート、期限切れ警告、対応中ステータス       |
| `warning-bg`  | `#FFFBEB`    | `amber-50`      | 警告バッジ・チップの背景                       |
| `error`       | `#DC2626`    | `red-600`       | 削除などの破壊的操作、エラー状態               |
| `error-bg`    | `#FEF2F2`    | `red-50`        | エラーバッジ・チップの背景                     |
| `info`        | `#2563EB`    | `blue-600`      | 情報バッジ、リンク                             |
| `info-bg`     | `#EFF6FF`    | `blue-50`       | 情報バッジ・チップの背景                       |

---

## 3. タイポグラフィ

### フォント

```
欧文:     Inter, sans-serif
和文:     "Noto Sans JP", sans-serif
フォールバック: system-ui, -apple-system, sans-serif

body { font-family: 'Inter', 'Noto Sans JP', sans-serif; }
```

### 文字サイズの体系

| レベル         | サイズ | ウェイト    | Tailwindクラス                | 用途                               |
|----------------|--------|-------------|-------------------------------|------------------------------------|
| 表示（Display）| 28px   | 800         | `text-3xl font-extrabold`     | ページのヒーロー、空状態の見出し   |
| 見出し1        | 22px   | 700         | `text-xl font-bold`           | セクションページのタイトル         |
| 見出し2        | 18px   | 700         | `text-lg font-bold`           | カードヘッダー、モーダルタイトル   |
| 見出し3        | 15px   | 600         | `text-sm font-semibold`       | サブセクションラベル、テーブルヘッダー |
| 本文           | 14px   | 400         | `text-sm font-normal`         | 主要コンテンツ、テーブルセル       |
| 本文（強調）   | 14px   | 600         | `text-sm font-semibold`       | 強調データ、フィールド値           |
| キャプション   | 12px   | 500         | `text-xs font-medium`         | メタデータ、タイムスタンプ、補足   |
| ラベル/バッジ  | 11px   | 600         | `text-[11px] font-semibold`   | ステータスチップ、タグ、サブナビ   |

### 字間・行間

- 見出し: `tracking-tight`（字間を少し詰める）
- 本文: デフォルト
- 大文字ラベル: `tracking-widest uppercase text-[10px] font-bold text-slate-400`

---

## 4. コンポーネントスタイル

### ボタン

```
共通ベース:
  inline-flex items-center gap-2 font-semibold transition-all active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed

プライマリ:
  bg-blue-600 text-white hover:bg-blue-700 shadow-sm
  px-4 py-2 text-sm rounded-lg

セカンダリ:
  bg-white text-slate-700 border border-slate-200 hover:bg-slate-50
  px-4 py-2 text-sm rounded-lg

危険（削除・取り消し）:
  bg-red-600 text-white hover:bg-red-700
  px-4 py-2 text-sm rounded-lg

ゴースト（透明）:
  text-slate-600 hover:bg-slate-100 hover:text-slate-900
  px-4 py-2 text-sm rounded-lg

アイコンのみ: p-2 rounded-lg（各バリアントのカラーを適用）

サイズ — 小（sm）: px-3 py-1.5 text-xs rounded-md
サイズ — 中（md）: px-4 py-2 text-sm rounded-lg   ← デフォルト
サイズ — 大（lg）: px-6 py-3 text-base rounded-xl
```

### カード

```
ベースカード:
  bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden

カードヘッダー:
  px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/60

カードボディ:
  px-6 py-5

カードフッター:
  px-6 py-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-end gap-2
```

### フォーム入力

```
テキスト入力 / セレクト:
  w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg
  text-slate-900 placeholder:text-slate-400
  focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
  disabled:bg-slate-50 disabled:text-slate-400

ラベル:
  block text-xs font-semibold text-slate-600 mb-1.5

入力グループ（ラベル＋入力欄）:
  space-y-1.5

エラー状態:
  border-red-400 focus:ring-red-500/30 focus:border-red-500

補足テキスト:
  text-xs text-slate-400 mt-1
```

### テーブル

```
コンテナ:  w-full border border-slate-200 rounded-xl overflow-hidden

ヘッダー行: bg-slate-50 border-b border-slate-200
  th: px-4 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider

ボディ行:
  td: px-4 py-3 text-sm text-slate-700
  ホバー: hover:bg-slate-50/70
  枠線: border-b border-slate-100 last:border-b-0

ストライプ（任意）:
  even:bg-slate-50/40
```

### バッジ / ステータスチップ

```
共通ベース: inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold

対応済み / 完了: bg-emerald-50 text-emerald-700 border border-emerald-200
対応中 / 注意:   bg-amber-50 text-amber-700 border border-amber-200
未対応 / エラー: bg-red-50 text-red-700 border border-red-200
情報 / 通常:     bg-blue-50 text-blue-700 border border-blue-200
ニュートラル:    bg-slate-100 text-slate-600 border border-slate-200
```

### モーダル / ダイアログ

```
オーバーレイ:   fixed inset-0 bg-black/40 backdrop-blur-sm z-50
コンテナ:       bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto
                max-h-[90vh] overflow-y-auto

ヘッダー:   px-6 py-5 border-b border-slate-100 flex items-center justify-between
  タイトル: text-lg font-bold text-slate-900
  閉じるボタン: p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100

ボディ:     px-6 py-5 space-y-4
フッター:   px-6 py-5 border-t border-slate-100 flex justify-end gap-3
```

### サイドバーナビゲーション

```
サイドバーコンテナ:
  w-64 bg-slate-900 h-full flex flex-col border-r border-slate-800

ロゴエリア:
  px-5 py-5 border-b border-slate-800

ナビ項目（通常）:
  flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg
  text-sm font-medium text-slate-400
  ホバー: bg-slate-800 text-white
  アイコン: text-slate-500

ナビ項目（アクティブ）:
  bg-slate-800 text-white
  左のアクセントバー: border-l-2 border-blue-500
  アイコン: text-blue-400

グループラベル（親項目）:
  px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4

サブナビ項目:
  pl-10 pr-4 py-2 mx-2 rounded-lg text-xs font-medium text-slate-500
  ホバー: text-slate-300 bg-slate-800/60
  アクティブ: text-white

ユーザーパネル（最下部）:
  mt-auto px-4 py-4 border-t border-slate-800
  アバター: w-8 h-8 rounded-lg bg-slate-700 text-white font-bold text-sm
```

### ページヘッダー

```
コンテナ:   mb-6
タイトル:   text-xl font-bold text-slate-900 tracking-tight
サブタイトル: text-sm text-slate-500 mt-0.5
操作ボタン: flex items-center gap-2（右寄せ）
```

### アラートバナー

```
共通ベース: flex items-start gap-3 px-4 py-3 rounded-xl border text-sm

情報:     bg-blue-50 border-blue-200 text-blue-800
注意:     bg-amber-50 border-amber-200 text-amber-800
エラー:   bg-red-50 border-red-200 text-red-800
完了:     bg-emerald-50 border-emerald-200 text-emerald-800
```

---

## 5. レイアウト原則

### スペーシング（8pxベース）

| トークン    | 値    | Tailwind | 用途                         |
|-------------|-------|----------|------------------------------|
| `space-1`   | 4px   | `p-1`    | アイコンのパディング、狭い隙間 |
| `space-2`   | 8px   | `p-2`    | チップのパディング、小さい隙間 |
| `space-3`   | 12px  | `p-3`    | ナビ項目のパディング         |
| `space-4`   | 16px  | `p-4`    | カードの内側パディング（コンパクト） |
| `space-5`   | 20px  | `p-5`    | セクション間の隙間           |
| `space-6`   | 24px  | `p-6`    | カードのパディング（標準）   |
| `space-8`   | 32px  | `p-8`    | ページセクション             |
| `space-10`  | 40px  | `p-10`   | ページレベルの縦の間隔       |

### グリッドとレイアウト

```
アプリのシェル:
  サイドバー（w-64、固定）＋ メインコンテンツ（flex-1、overflow-y-auto）

メインコンテンツのコンテナ:
  max-w-none px-6 py-6（全幅 + パディング）

コンテンツグリッド — 2列: grid grid-cols-1 lg:grid-cols-2 gap-6
コンテンツグリッド — 3列: grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6
統計カード — 4列:        grid grid-cols-2 lg:grid-cols-4 gap-4

セクション間の縦の間隔: space-y-6
グリッド内のカード間隔: gap-6（24px）
フォームのフィールド間隔: space-y-4
```

---

## 6. 奥行きと立体感

### シャドウの体系

```
シャドウなし:  テーブル行など平坦なサーフェス
非常に薄い:   shadow-sm  → わずかな浮き上がり感（カードのデフォルト）
標準:         shadow     → 一般的なコンテンツ
浮き上がり:   shadow-md  → ホバーカード、ドロップダウン
フローティング: shadow-xl → モーダル、ポップオーバー、ダイアログ
```

### サーフェスの階層

```
レベル0 — ページ:    bg-slate-50（最外層の背景）
レベル1 — カード:    bg-white + shadow-sm + border-slate-200
レベル2 — 浮き上がり: bg-white + shadow-md（ドロップダウン）
レベル3 — オーバーレイ: bg-white + shadow-2xl（ダイアログ、ドロワー）
```

### 角丸（border-radius）

| 対象                       | Tailwindクラス  | 値     |
|----------------------------|-----------------|--------|
| バッジ、チップ             | `rounded-full`  | 9999px |
| ボタン（小）               | `rounded-md`    | 6px    |
| ボタン（中・大）           | `rounded-lg`    | 8px    |
| 入力欄                     | `rounded-lg`    | 8px    |
| カード                     | `rounded-2xl`   | 16px   |
| モーダル                   | `rounded-2xl`   | 16px   |
| サイドバーのナビ項目       | `rounded-lg`    | 8px    |

---

## 7. やること・やってはいけないこと

### やること
- ニュートラル・テキスト色はすべて `slate-*` を使う（`gray-*` や `zinc-*` は使わない）
- コアUIのアクセントカラーは `blue-600` の1色のみに絞る
- 意味のある色（emerald / amber / red）はステータス表示にのみ使う
- フォントウェイトは `font-semibold` または `font-bold` を基本とする
- インタラクティブな要素には `rounded-lg`、コンテナには `rounded-2xl` を使う
- カードには `border border-slate-200` を必ず付ける — シャドウだけで枠線なしはNG
- モーダルの幅は `max-w-lg`（標準）または `max-w-2xl`（フィールドが多いフォーム）に収める
- 密度の高いUIでは本文サイズを `text-sm`（14px）に統一する

### やってはいけないこと
- 同一画面に複数のアクセントカラー（紫、ティール、ピンクなど）を使わない
- すべてのボタンに `shadow-lg shadow-blue-200` を付けない — メインCTAのみに限定する
- カードの中にカードを入れ子にしない
- 1枚のカード内でテキスト階層を3レベル以上作らない
- インタラクティブなコンポーネントに `rounded-2xl` より大きな角丸を使わない
- 本文やテーブルの内容に `font-black`（ウェイト900）を使わない
- 色だけでステータスを伝えない — 必ずアイコンまたはラベルと組み合わせる
- モーダルのオーバーレイを完全透明にしない — 最低でも `bg-black/40` を使う

---

## 8. レスポンシブ対応

### ブレークポイント

| 名称       | Tailwindプレフィックス | 最小幅   | 備考                                |
|------------|------------------------|----------|-------------------------------------|
| モバイル   | （デフォルト）         | 0px      | 1カラム、縦積みレイアウト           |
| タブレット | `md:`                  | 768px    | 2カラムグリッドが登場               |
| デスクトップ | `lg:`                 | 1024px   | サイドバーが常時表示（固定）        |
| ワイド     | `xl:`                  | 1280px   | 3〜4カラムグリッド、広いコンテナ    |

### サイドバーの挙動

```
モバイル（1024px未満）: サイドバーは非表示。ハンバーガーメニューでスライドイン（オーバーレイ）
デスクトップ（1024px以上）: サイドバーは常時表示、静的配置、幅256px（w-64）
```

### タッチターゲット

- タップ領域の最小サイズ: `min-h-[44px]` またはモバイルで `py-3`
- ナビ項目、ボタン、フォームコントロールはこの最小サイズを満たすこと

### テーブルの折りたたみ戦略

```
モバイルでは水平スクロールを使う（テーブルを縦並びに崩さない）
ラッパー: <div class="overflow-x-auto rounded-xl border border-slate-200">

優先度の低いカラムはモバイルで非表示: hidden md:table-cell
```

### フォームのレイアウト

```
モバイル:        1カラム
md以上:          2カラムグリッド（grid grid-cols-1 md:grid-cols-2 gap-4）
```

---

## 9. AIエージェント向けガイド

### カラー早見表

```
ページ背景:          bg-slate-50
カード背景:          bg-white
プライマリアクション: bg-blue-600 text-white hover:bg-blue-700
セカンダリアクション: bg-white border border-slate-200 text-slate-700 hover:bg-slate-50
危険アクション:      bg-red-600 text-white hover:bg-red-700
サイドバー背景:      bg-slate-900
アクティブナビ:      bg-slate-800 text-white
ステータス — 完了:   bg-emerald-50 text-emerald-700 border-emerald-200
ステータス — 注意:   bg-amber-50 text-amber-700 border-amber-200
ステータス — エラー: bg-red-50 text-red-700 border-red-200
区切り線:            border-slate-100 または border-slate-200
```

### プロンプト例

> 「DESIGN.mdのカードスタイルを使って、ヘッダー・ボディ・フッターを持つカードをダッシュボードに追加してください。フッターにはプライマリボタンを配置してください。」

> 「'対応済み'というステータスバッジをDESIGN.mdのemeral（完了）バッジスタイルで作成してください。」

> 「DESIGN.mdの仕様に従ったレスポンシブな2カラムフォームを作成してください。モバイルでは1カラムに折りたたまれるようにしてください。」

> 「危険アクションのボタンを持つ確認モーダルをDESIGN.mdのモーダル仕様に従って追加してください。」

> 「slate-50のヘッダー行、border-slate-200のコンテナ、hover:bg-slate-50/70の行ホバー状態を持つデータテーブルを作成してください。」

### 技術スタックのメモ

```
CSSフレームワーク: Tailwind CSS（CDN） — ユーティリティファースト
アイコン:          Lucide React — 統一されたストロークベースのアイコン（w-4 h-4 または w-5 h-5）
グラフ:            Recharts — デザインシステムに合わせてslate/blueパレットを使用
フォント:          Google Fonts（Inter + Noto Sans JP）— index.htmlの<link>で読み込み済み
アニメーション:    Tailwind animate（fade-in, slide-in-from-top）— ページ遷移に使用
```
