import type { VideoConfig } from "./types";

export const videoConfigs: readonly VideoConfig[] = [
  // ──────────────────────────────────────────────
  // 01: ダイエットサプリ (Diet Supplement)
  // ──────────────────────────────────────────────
  {
    id: "Video01-DietSupplement",
    title: "ダイエットサプリ",
    theme: {
      background: ["#FF6B35", "#FF4757", "#C44569"],
      overlay: "#1a0a2e",
    },
    hook: {
      lines: ["まだ無理な", "食事制限してるの？"],
      bgImage: "images/hook-woman.jpg",
      accentColor: "#FFD700",
    },
    problem: {
      items: [
        { emoji: "😞", text: "食事制限がツラい..." },
        { emoji: "😞", text: "リバウンドの繰り返し..." },
        { emoji: "😞", text: "運動する時間がない..." },
        { emoji: "😢", text: "もう何をやっても続かない" },
      ],
      bgImage: "images/diet-struggle.jpg",
    },
    solution: {
      headline: ["飲むだけ簡単", "ダイエット"],
      features: [
        { icon: "💊", text: "1日1粒飲むだけ" },
        { icon: "🔥", text: "脂肪燃焼サポート成分配合" },
        { icon: "🌿", text: "天然由来成分100%" },
        { icon: "✨", text: "管理栄養士監修" },
      ],
      productImage: "images/supplement-pills.jpg",
      bgImage: "images/supplement-pills.jpg",
    },
    proof: {
      title: "選ばれる理由",
      stats: [
        { value: 95, suffix: "%", label: "お客様満足度", color: "#00D4AA" },
        { value: 87, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 50, suffix: "万個", label: "累計販売数", color: "#FF6B9D" },
      ],
      personImage: "images/happy-fit.jpg",
    },
    cta: {
      badge: "🔥 今だけ限定価格",
      price: "980円",
      priceNote: "送料無料",
      ctaText: "今すぐチェック",
      scarcity: "※ 残りわずか",
      productImage: "images/supplement-pills.jpg",
      bgImage: "images/supplement-bottle.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 02: 美白美容液 (Skincare Serum)
  // ──────────────────────────────────────────────
  {
    id: "Video02-Skincare",
    title: "美白美容液",
    theme: {
      background: ["#E8B4CB", "#C77DBA", "#9B59B6"],
      overlay: "#1a0520",
    },
    hook: {
      lines: ["シミ・くすみ", "諦めてない？"],
      bgImage: "images/v02-hook.jpg",
      accentColor: "#FFB6C1",
    },
    problem: {
      items: [
        { emoji: "😔", text: "ファンデで隠す毎日..." },
        { emoji: "😔", text: "高い美容液が効かない..." },
        { emoji: "😔", text: "年齢とともに増えるシミ..." },
        { emoji: "😢", text: "すっぴんに自信がない" },
      ],
      bgImage: "images/v02-hook.jpg",
    },
    solution: {
      headline: ["塗るだけ透明肌", "美白ケア"],
      features: [
        { icon: "💎", text: "薬用美白成分配合" },
        { icon: "🌹", text: "ヒアルロン酸5種類" },
        { icon: "🧴", text: "朝晩2プッシュだけ" },
        { icon: "✨", text: "皮膚科医推奨" },
      ],
      productImage: "images/v02-product.jpg",
      bgImage: "images/v02-product.jpg",
    },
    proof: {
      title: "実感の声",
      stats: [
        { value: 93, suffix: "%", label: "透明感を実感", color: "#E8B4CB" },
        { value: 89, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 30, suffix: "万本", label: "累計販売数", color: "#FF6B9D" },
      ],
      personImage: "images/v02-person.jpg",
    },
    cta: {
      badge: "✨ 初回限定キャンペーン",
      price: "1,980円",
      priceNote: "定期縛りなし",
      ctaText: "美白を始める",
      scarcity: "※ 毎月先着500名限定",
      productImage: "images/v02-product.jpg",
      bgImage: "images/v02-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 03: 育毛剤 (Hair Growth)
  // ──────────────────────────────────────────────
  {
    id: "Video03-HairGrowth",
    title: "育毛剤",
    theme: {
      background: ["#2C3E50", "#34495E", "#1ABC9C"],
      overlay: "#0a1a2e",
    },
    hook: {
      lines: ["薄毛が気になる", "その悩み解決します"],
      bgImage: "images/v03-hook.jpg",
      accentColor: "#1ABC9C",
    },
    problem: {
      items: [
        { emoji: "😰", text: "抜け毛が増えた..." },
        { emoji: "😰", text: "分け目が目立つ..." },
        { emoji: "😰", text: "帽子が手放せない..." },
        { emoji: "😢", text: "鏡を見るのがツラい" },
      ],
      bgImage: "images/v03-hook.jpg",
    },
    solution: {
      headline: ["頭皮から変わる", "育毛ケア"],
      features: [
        { icon: "🌱", text: "有効成分3種配合" },
        { icon: "💧", text: "独自浸透テクノロジー" },
        { icon: "🔬", text: "臨床試験済み" },
        { icon: "👨‍⚕️", text: "毛髪診断士監修" },
      ],
      productImage: "images/v03-product.jpg",
      bgImage: "images/v03-product.jpg",
    },
    proof: {
      title: "利用者の声",
      stats: [
        { value: 92, suffix: "%", label: "実感率", color: "#1ABC9C" },
        { value: 85, suffix: "%", label: "継続率", color: "#FFD700" },
        { value: 100, suffix: "万本", label: "累計出荷", color: "#3498DB" },
      ],
      personImage: "images/v03-person.jpg",
    },
    cta: {
      badge: "🌱 発毛促進キャンペーン",
      price: "3,980円",
      priceNote: "全額返金保証付き",
      ctaText: "育毛を始める",
      scarcity: "※ 毎月300名限定",
      productImage: "images/v03-product.jpg",
      bgImage: "images/v03-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 04: プロテインバー (Protein Bar)
  // ──────────────────────────────────────────────
  {
    id: "Video04-ProteinBar",
    title: "プロテインバー",
    theme: {
      background: ["#E67E22", "#D35400", "#C0392B"],
      overlay: "#1a1008",
    },
    hook: {
      lines: ["筋トレ後の", "栄養補給、適当？"],
      bgImage: "images/v04-hook.jpg",
      accentColor: "#F39C12",
    },
    problem: {
      items: [
        { emoji: "😤", text: "プロテインが不味い..." },
        { emoji: "😤", text: "シェイカー持ち歩くの面倒..." },
        { emoji: "😤", text: "間食でカロリーオーバー..." },
        { emoji: "😢", text: "筋肉がなかなかつかない" },
      ],
      bgImage: "images/v04-hook.jpg",
    },
    solution: {
      headline: ["食べるだけ筋活", "プロテインバー"],
      features: [
        { icon: "💪", text: "タンパク質30g配合" },
        { icon: "🍫", text: "チョコ味で美味しい" },
        { icon: "📦", text: "個包装で持ち運び便利" },
        { icon: "⚡", text: "BCAA＆HMB配合" },
      ],
      productImage: "images/v04-product.jpg",
      bgImage: "images/v04-product.jpg",
    },
    proof: {
      title: "アスリート御用達",
      stats: [
        { value: 96, suffix: "%", label: "味の満足度", color: "#E67E22" },
        { value: 88, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 200, suffix: "万本", label: "累計販売", color: "#E74C3C" },
      ],
      personImage: "images/v04-person.jpg",
    },
    cta: {
      badge: "💪 ボディメイク応援",
      price: "2,480円",
      priceNote: "12本入り送料無料",
      ctaText: "筋活を始める",
      scarcity: "※ 在庫残りわずか",
      productImage: "images/v04-product.jpg",
      bgImage: "images/v04-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 05: 睡眠サプリ (Sleep Supplement)
  // ──────────────────────────────────────────────
  {
    id: "Video05-SleepPill",
    title: "睡眠サプリ",
    theme: {
      background: ["#2C3E50", "#192A56", "#0C1445"],
      overlay: "#0a0a20",
    },
    hook: {
      lines: ["眠れない夜", "もう終わりに"],
      bgImage: "images/v05-hook.jpg",
      accentColor: "#A29BFE",
    },
    problem: {
      items: [
        { emoji: "😫", text: "寝つきが悪い..." },
        { emoji: "😫", text: "夜中に何度も目が覚める..." },
        { emoji: "😫", text: "朝スッキリ起きれない..." },
        { emoji: "😢", text: "睡眠薬には頼りたくない" },
      ],
      bgImage: "images/v05-hook.jpg",
    },
    solution: {
      headline: ["飲んでぐっすり", "快眠サプリ"],
      features: [
        { icon: "🌙", text: "GABA配合" },
        { icon: "🌿", text: "テアニン＆グリシン" },
        { icon: "💤", text: "寝る前1粒だけ" },
        { icon: "🔬", text: "機能性表示食品" },
      ],
      productImage: "images/v05-product.jpg",
      bgImage: "images/v05-product.jpg",
    },
    proof: {
      title: "快眠の実感",
      stats: [
        { value: 94, suffix: "%", label: "睡眠改善実感", color: "#A29BFE" },
        { value: 91, suffix: "%", label: "朝スッキリ", color: "#FFD700" },
        { value: 80, suffix: "万袋", label: "累計販売", color: "#74B9FF" },
      ],
      personImage: "images/v05-person.jpg",
    },
    cta: {
      badge: "🌙 快眠キャンペーン",
      price: "1,480円",
      priceNote: "30日分・送料無料",
      ctaText: "快眠を手に入れる",
      scarcity: "※ 初回限定価格",
      productImage: "images/v05-product.jpg",
      bgImage: "images/v05-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 06: 目元クリーム (Eye Cream)
  // ──────────────────────────────────────────────
  {
    id: "Video06-EyeCream",
    title: "目元クリーム",
    theme: {
      background: ["#D4A5A5", "#C78283", "#A0616A"],
      overlay: "#1a0a15",
    },
    hook: {
      lines: ["目元のクマ", "老け見えしてない？"],
      bgImage: "images/v06-hook.jpg",
      accentColor: "#F8C8DC",
    },
    problem: {
      items: [
        { emoji: "😔", text: "目の下のクマが消えない..." },
        { emoji: "😔", text: "小じわが増えてきた..." },
        { emoji: "😔", text: "コンシーラーが手放せない..." },
        { emoji: "😢", text: "実年齢より老けて見られる" },
      ],
      bgImage: "images/v06-hook.jpg",
    },
    solution: {
      headline: ["目元から若返る", "アイクリーム"],
      features: [
        { icon: "👁️", text: "レチノール高濃度配合" },
        { icon: "💎", text: "ペプチド複合体" },
        { icon: "🌸", text: "朝晩ひと塗り" },
        { icon: "✨", text: "眼科医監修処方" },
      ],
      productImage: "images/v06-product.jpg",
      bgImage: "images/v06-product.jpg",
    },
    proof: {
      title: "若返り実感",
      stats: [
        { value: 91, suffix: "%", label: "クマ改善実感", color: "#D4A5A5" },
        { value: 88, suffix: "%", label: "ハリを実感", color: "#FFD700" },
        { value: 25, suffix: "万個", label: "累計販売", color: "#FF6B9D" },
      ],
      personImage: "images/v06-person.jpg",
    },
    cta: {
      badge: "👁️ 目元集中ケア",
      price: "2,980円",
      priceNote: "2ヶ月分・送料無料",
      ctaText: "若い目元を取り戻す",
      scarcity: "※ 毎月200名限定",
      productImage: "images/v06-product.jpg",
      bgImage: "images/v06-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 07: ホワイトニング歯磨き (Tooth Whitening)
  // ──────────────────────────────────────────────
  {
    id: "Video07-ToothWhitening",
    title: "ホワイトニング歯磨き",
    theme: {
      background: ["#74B9FF", "#0984E3", "#6C5CE7"],
      overlay: "#0a1020",
    },
    hook: {
      lines: ["歯の黄ばみ", "笑顔に自信ある？"],
      bgImage: "images/v07-hook.jpg",
      accentColor: "#74B9FF",
    },
    problem: {
      items: [
        { emoji: "😬", text: "コーヒーで歯が黄ばむ..." },
        { emoji: "😬", text: "ホワイトニングは高い..." },
        { emoji: "😬", text: "笑顔に自信がない..." },
        { emoji: "😢", text: "写真で歯の色が気になる" },
      ],
      bgImage: "images/v07-hook.jpg",
    },
    solution: {
      headline: ["磨くだけ白い歯", "ホワイトニング"],
      features: [
        { icon: "🦷", text: "医薬部外品認定" },
        { icon: "💎", text: "ポリリン酸Na配合" },
        { icon: "🌿", text: "研磨剤フリー" },
        { icon: "✨", text: "歯科医師共同開発" },
      ],
      productImage: "images/v07-product.jpg",
      bgImage: "images/v07-product.jpg",
    },
    proof: {
      title: "白い歯の実感",
      stats: [
        { value: 96, suffix: "%", label: "白さを実感", color: "#74B9FF" },
        { value: 90, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 60, suffix: "万本", label: "累計販売", color: "#A29BFE" },
      ],
      personImage: "images/v07-person.jpg",
    },
    cta: {
      badge: "🦷 白い歯キャンペーン",
      price: "1,280円",
      priceNote: "初回半額・送料無料",
      ctaText: "白い歯を手に入れる",
      scarcity: "※ 先着1,000名限定",
      productImage: "images/v07-product.jpg",
      bgImage: "images/v07-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 08: コラーゲンドリンク (Collagen Drink)
  // ──────────────────────────────────────────────
  {
    id: "Video08-CollagenDrink",
    title: "コラーゲンドリンク",
    theme: {
      background: ["#FD79A8", "#E84393", "#A855F7"],
      overlay: "#1a0818",
    },
    hook: {
      lines: ["肌のハリ", "もう戻らないと思ってない？"],
      bgImage: "images/v08-hook.jpg",
      accentColor: "#FD79A8",
    },
    problem: {
      items: [
        { emoji: "😔", text: "肌のハリがなくなった..." },
        { emoji: "😔", text: "ほうれい線が深くなった..." },
        { emoji: "😔", text: "スキンケアだけじゃ足りない..." },
        { emoji: "😢", text: "内側からのケアが必要" },
      ],
      bgImage: "images/v08-hook.jpg",
    },
    solution: {
      headline: ["飲むハリ肌", "コラーゲン"],
      features: [
        { icon: "🍹", text: "低分子コラーゲン10,000mg" },
        { icon: "🫐", text: "プラセンタ配合" },
        { icon: "🍊", text: "ピーチ味で飲みやすい" },
        { icon: "✨", text: "特許製法で吸収率UP" },
      ],
      productImage: "images/v08-product.jpg",
      bgImage: "images/v08-product.jpg",
    },
    proof: {
      title: "ハリ肌の声",
      stats: [
        { value: 94, suffix: "%", label: "ハリを実感", color: "#FD79A8" },
        { value: 91, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 40, suffix: "万箱", label: "累計販売", color: "#A855F7" },
      ],
      personImage: "images/v08-person.jpg",
    },
    cta: {
      badge: "🍹 美肌キャンペーン",
      price: "1,980円",
      priceNote: "10本入り・送料無料",
      ctaText: "ハリ肌を体験する",
      scarcity: "※ 初回限定価格",
      productImage: "images/v08-product.jpg",
      bgImage: "images/v08-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 09: 脂肪燃焼ジェル (Fat Burner Gel)
  // ──────────────────────────────────────────────
  {
    id: "Video09-FatBurner",
    title: "脂肪燃焼ジェル",
    theme: {
      background: ["#FF6348", "#FF4757", "#C44569"],
      overlay: "#1a0808",
    },
    hook: {
      lines: ["お腹の脂肪", "塗って燃やす時代"],
      bgImage: "images/v09-hook.jpg",
      accentColor: "#FF6348",
    },
    problem: {
      items: [
        { emoji: "😤", text: "ぽっこりお腹が気になる..." },
        { emoji: "😤", text: "部分痩せが難しい..." },
        { emoji: "😤", text: "エステに通う余裕がない..." },
        { emoji: "😢", text: "お気に入りの服が入らない" },
      ],
      bgImage: "images/v09-hook.jpg",
    },
    solution: {
      headline: ["塗るだけ燃焼", "ボディジェル"],
      features: [
        { icon: "🔥", text: "温感カプサイシン配合" },
        { icon: "💆", text: "マッサージでW効果" },
        { icon: "🌿", text: "植物由来の引き締め成分" },
        { icon: "✨", text: "エステティシャン推奨" },
      ],
      productImage: "images/v09-product.jpg",
      bgImage: "images/v09-product.jpg",
    },
    proof: {
      title: "引き締め実感",
      stats: [
        { value: 89, suffix: "%", label: "引き締め実感", color: "#FF6348" },
        { value: 85, suffix: "%", label: "サイズダウン", color: "#FFD700" },
        { value: 35, suffix: "万本", label: "累計販売", color: "#FF6B9D" },
      ],
      personImage: "images/v09-person.jpg",
    },
    cta: {
      badge: "🔥 燃焼キャンペーン",
      price: "2,480円",
      priceNote: "大容量200ml・送料無料",
      ctaText: "燃焼ケアを始める",
      scarcity: "※ 数量限定価格",
      productImage: "images/v09-product.jpg",
      bgImage: "images/v09-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 10: ビタミンCサプリ (Vitamin C)
  // ──────────────────────────────────────────────
  {
    id: "Video10-VitaminC",
    title: "ビタミンCサプリ",
    theme: {
      background: ["#FFEAA7", "#FDCB6E", "#F39C12"],
      overlay: "#1a1508",
    },
    hook: {
      lines: ["美容と健康の", "基本、足りてる？"],
      bgImage: "images/v10-hook.jpg",
      accentColor: "#FDCB6E",
    },
    problem: {
      items: [
        { emoji: "😟", text: "肌荒れが治らない..." },
        { emoji: "😟", text: "疲れが取れない..." },
        { emoji: "😟", text: "風邪をひきやすい..." },
        { emoji: "😢", text: "食事だけでは足りない" },
      ],
      bgImage: "images/v10-hook.jpg",
    },
    solution: {
      headline: ["1日1粒で", "ビタミンC充足"],
      features: [
        { icon: "🍋", text: "ビタミンC 2000mg" },
        { icon: "⏰", text: "持続型タイムリリース" },
        { icon: "🫐", text: "亜鉛＆ビタミンD配合" },
        { icon: "✨", text: "GMP認定工場製造" },
      ],
      productImage: "images/v10-product.jpg",
      bgImage: "images/v10-product.jpg",
    },
    proof: {
      title: "元気の実感",
      stats: [
        { value: 97, suffix: "%", label: "体調改善実感", color: "#FDCB6E" },
        { value: 93, suffix: "%", label: "肌質改善", color: "#FFD700" },
        { value: 150, suffix: "万袋", label: "累計販売", color: "#F39C12" },
      ],
      personImage: "images/v10-person.jpg",
    },
    cta: {
      badge: "🍋 健康応援キャンペーン",
      price: "780円",
      priceNote: "30日分・送料無料",
      ctaText: "元気を始める",
      scarcity: "※ 初回65%OFF",
      productImage: "images/v10-product.jpg",
      bgImage: "images/v10-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 11: 制汗デオドラント (Deo Spray)
  // ──────────────────────────────────────────────
  {
    id: "Video11-DeoSpray",
    title: "制汗デオドラント",
    theme: {
      background: ["#00B894", "#00CEC9", "#0984E3"],
      overlay: "#081a18",
    },
    hook: {
      lines: ["汗のニオイ", "周りに気づかれてるかも"],
      bgImage: "images/v11-hook.jpg",
      accentColor: "#00CEC9",
    },
    problem: {
      items: [
        { emoji: "😰", text: "汗ジミが恥ずかしい..." },
        { emoji: "😰", text: "ニオイが気になって近づけない..." },
        { emoji: "😰", text: "制汗剤がすぐ効かなくなる..." },
        { emoji: "😢", text: "満員電車が憂鬱" },
      ],
      bgImage: "images/v11-hook.jpg",
    },
    solution: {
      headline: ["朝ひと塗りで", "24時間快適"],
      features: [
        { icon: "💧", text: "医薬部外品の制汗力" },
        { icon: "🛡️", text: "ニオイ菌を99.9%殺菌" },
        { icon: "🌸", text: "無香料で目立たない" },
        { icon: "✨", text: "皮膚科医テスト済み" },
      ],
      productImage: "images/v11-product.jpg",
      bgImage: "images/v11-product.jpg",
    },
    proof: {
      title: "快適の声",
      stats: [
        { value: 98, suffix: "%", label: "制汗効果実感", color: "#00CEC9" },
        { value: 92, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 70, suffix: "万本", label: "累計販売", color: "#0984E3" },
      ],
      personImage: "images/v11-person.jpg",
    },
    cta: {
      badge: "🛡️ ニオイ対策キャンペーン",
      price: "1,280円",
      priceNote: "2ヶ月分・送料無料",
      ctaText: "快適を手に入れる",
      scarcity: "※ 夏の限定価格",
      productImage: "images/v11-product.jpg",
      bgImage: "images/v11-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 12: ネイルセラム (Nail Serum)
  // ──────────────────────────────────────────────
  {
    id: "Video12-NailSerum",
    title: "ネイルセラム",
    theme: {
      background: ["#FDA7DF", "#D980FA", "#A55EEA"],
      overlay: "#180a20",
    },
    hook: {
      lines: ["爪がボロボロ", "ネイルが映えない？"],
      bgImage: "images/v12-hook.jpg",
      accentColor: "#FDA7DF",
    },
    problem: {
      items: [
        { emoji: "😔", text: "爪が割れやすい..." },
        { emoji: "😔", text: "二枚爪が悩み..." },
        { emoji: "😔", text: "ジェルネイルで傷んだ..." },
        { emoji: "😢", text: "手元に自信がない" },
      ],
      bgImage: "images/v12-hook.jpg",
    },
    solution: {
      headline: ["塗るだけ美爪", "ネイルセラム"],
      features: [
        { icon: "💅", text: "ケラチン補修成分" },
        { icon: "🌹", text: "ビオチン高濃度配合" },
        { icon: "💧", text: "就寝前ひと塗り" },
        { icon: "✨", text: "ネイリスト共同開発" },
      ],
      productImage: "images/v12-product.jpg",
      bgImage: "images/v12-product.jpg",
    },
    proof: {
      title: "美爪の実感",
      stats: [
        { value: 90, suffix: "%", label: "爪の強度UP実感", color: "#FDA7DF" },
        { value: 86, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 15, suffix: "万本", label: "累計販売", color: "#A55EEA" },
      ],
      personImage: "images/v12-person.jpg",
    },
    cta: {
      badge: "💅 美爪キャンペーン",
      price: "1,680円",
      priceNote: "2ヶ月分・送料無料",
      ctaText: "美爪ケアを始める",
      scarcity: "※ 初回限定特別価格",
      productImage: "images/v12-product.jpg",
      bgImage: "images/v12-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 13: 膝サポーター (Knee Support)
  // ──────────────────────────────────────────────
  {
    id: "Video13-KneeSupport",
    title: "膝サポーター",
    theme: {
      background: ["#636E72", "#2D3436", "#00B894"],
      overlay: "#0a1210",
    },
    hook: {
      lines: ["階段がツラい", "膝の痛み、我慢してない？"],
      bgImage: "images/v13-hook.jpg",
      accentColor: "#00B894",
    },
    problem: {
      items: [
        { emoji: "😣", text: "階段の上り下りが辛い..." },
        { emoji: "😣", text: "正座ができない..." },
        { emoji: "😣", text: "散歩も億劫になった..." },
        { emoji: "😢", text: "好きな旅行を諦めたくない" },
      ],
      bgImage: "images/v13-hook.jpg",
    },
    solution: {
      headline: ["つけるだけ楽々", "膝サポーター"],
      features: [
        { icon: "🦵", text: "特許構造で膝を安定" },
        { icon: "🌡️", text: "遠赤外線素材で温める" },
        { icon: "👟", text: "薄型で服の下にOK" },
        { icon: "✨", text: "整形外科医推奨" },
      ],
      productImage: "images/v13-product.jpg",
      bgImage: "images/v13-product.jpg",
    },
    proof: {
      title: "快適歩行の声",
      stats: [
        { value: 93, suffix: "%", label: "痛み軽減実感", color: "#00B894" },
        { value: 89, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 45, suffix: "万個", label: "累計販売", color: "#636E72" },
      ],
      personImage: "images/v13-person.jpg",
    },
    cta: {
      badge: "🦵 快適歩行キャンペーン",
      price: "3,480円",
      priceNote: "両膝セット・送料無料",
      ctaText: "膝の悩みを解決",
      scarcity: "※ 在庫限り特別価格",
      productImage: "images/v13-product.jpg",
      bgImage: "images/v13-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 14: ブルーライトサプリ (Eye Supplement)
  // ──────────────────────────────────────────────
  {
    id: "Video14-EyeSupplement",
    title: "ブルーライトサプリ",
    theme: {
      background: ["#6C5CE7", "#A29BFE", "#0984E3"],
      overlay: "#0a0a20",
    },
    hook: {
      lines: ["スマホで目が", "疲れてませんか？"],
      bgImage: "images/v14-hook.jpg",
      accentColor: "#A29BFE",
    },
    problem: {
      items: [
        { emoji: "😵", text: "目が乾いてショボショボ..." },
        { emoji: "😵", text: "頭痛がひどい..." },
        { emoji: "😵", text: "ピントが合いにくい..." },
        { emoji: "😢", text: "仕事でPCは避けられない" },
      ],
      bgImage: "images/v14-hook.jpg",
    },
    solution: {
      headline: ["飲んで目を守る", "アイサプリ"],
      features: [
        { icon: "👁️", text: "ルテイン40mg配合" },
        { icon: "🫐", text: "ビルベリーエキス" },
        { icon: "🛡️", text: "ブルーライトから保護" },
        { icon: "✨", text: "機能性表示食品" },
      ],
      productImage: "images/v14-product.jpg",
      bgImage: "images/v14-product.jpg",
    },
    proof: {
      title: "目の健康実感",
      stats: [
        { value: 92, suffix: "%", label: "疲れ目改善", color: "#A29BFE" },
        { value: 88, suffix: "%", label: "視界クリア実感", color: "#FFD700" },
        { value: 55, suffix: "万袋", label: "累計販売", color: "#0984E3" },
      ],
      personImage: "images/v14-person.jpg",
    },
    cta: {
      badge: "👁️ 目の健康キャンペーン",
      price: "1,380円",
      priceNote: "30日分・送料無料",
      ctaText: "目を守り始める",
      scarcity: "※ 初回特別価格",
      productImage: "images/v14-product.jpg",
      bgImage: "images/v14-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 15: シワ改善クリーム (Wrinkle Cream)
  // ──────────────────────────────────────────────
  {
    id: "Video15-WrinkleCream",
    title: "シワ改善クリーム",
    theme: {
      background: ["#DFE6E9", "#B2BEC3", "#636E72"],
      overlay: "#0a0a12",
    },
    hook: {
      lines: ["おでこのシワ", "見て見ぬふり？"],
      bgImage: "images/v15-hook.jpg",
      accentColor: "#DFE6E9",
    },
    problem: {
      items: [
        { emoji: "😔", text: "おでこのシワが深くなった..." },
        { emoji: "😔", text: "眉間のシワで怒って見える..." },
        { emoji: "😔", text: "高級クリームでも効果なし..." },
        { emoji: "😢", text: "年齢を感じて自信喪失" },
      ],
      bgImage: "images/v15-hook.jpg",
    },
    solution: {
      headline: ["塗るだけシワ改善", "薬用クリーム"],
      features: [
        { icon: "🧴", text: "シワ改善有効成分ニールワン" },
        { icon: "💎", text: "純粋レチノール配合" },
        { icon: "🌹", text: "夜のスキンケアにプラス" },
        { icon: "✨", text: "医薬部外品認定" },
      ],
      productImage: "images/v15-product.jpg",
      bgImage: "images/v15-product.jpg",
    },
    proof: {
      title: "シワ改善の声",
      stats: [
        { value: 91, suffix: "%", label: "シワ改善実感", color: "#B2BEC3" },
        { value: 87, suffix: "%", label: "ハリ改善", color: "#FFD700" },
        { value: 20, suffix: "万個", label: "累計販売", color: "#636E72" },
      ],
      personImage: "images/v15-person.jpg",
    },
    cta: {
      badge: "✨ エイジングケア特別価格",
      price: "3,480円",
      priceNote: "2ヶ月分・送料無料",
      ctaText: "シワ改善を始める",
      scarcity: "※ 初回半額キャンペーン",
      productImage: "images/v15-product.jpg",
      bgImage: "images/v15-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 16: 腸活サプリ (Gut Health)
  // ──────────────────────────────────────────────
  {
    id: "Video16-GutHealth",
    title: "腸活サプリ",
    theme: {
      background: ["#55E6C1", "#25CCF7", "#1B9CFC"],
      overlay: "#081a18",
    },
    hook: {
      lines: ["お腹の調子", "毎日スッキリしてる？"],
      bgImage: "images/v16-hook.jpg",
      accentColor: "#55E6C1",
    },
    problem: {
      items: [
        { emoji: "😣", text: "便秘が何日も続く..." },
        { emoji: "😣", text: "お腹が張って苦しい..." },
        { emoji: "😣", text: "肌荒れの原因は腸かも..." },
        { emoji: "😢", text: "ヨーグルトだけじゃ足りない" },
      ],
      bgImage: "images/v16-hook.jpg",
    },
    solution: {
      headline: ["飲むだけ腸活", "乳酸菌サプリ"],
      features: [
        { icon: "🦠", text: "乳酸菌1兆個配合" },
        { icon: "🌿", text: "食物繊維＆オリゴ糖" },
        { icon: "💊", text: "1日1粒で簡単" },
        { icon: "✨", text: "消化器科医監修" },
      ],
      productImage: "images/v16-product.jpg",
      bgImage: "images/v16-product.jpg",
    },
    proof: {
      title: "スッキリ実感",
      stats: [
        { value: 95, suffix: "%", label: "お通じ改善", color: "#55E6C1" },
        { value: 90, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 80, suffix: "万袋", label: "累計販売", color: "#1B9CFC" },
      ],
      personImage: "images/v16-person.jpg",
    },
    cta: {
      badge: "🦠 腸活スタートキャンペーン",
      price: "980円",
      priceNote: "30日分・送料無料",
      ctaText: "腸活を始める",
      scarcity: "※ 初回73%OFF",
      productImage: "images/v16-product.jpg",
      bgImage: "images/v16-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 17: フットマッサージャー (Foot Massager)
  // ──────────────────────────────────────────────
  {
    id: "Video17-FootMassager",
    title: "フットマッサージャー",
    theme: {
      background: ["#A29BFE", "#6C5CE7", "#341F97"],
      overlay: "#0a0820",
    },
    hook: {
      lines: ["足のむくみ", "一日の疲れ溜めてない？"],
      bgImage: "images/v17-hook.jpg",
      accentColor: "#A29BFE",
    },
    problem: {
      items: [
        { emoji: "😩", text: "夕方にはパンパン..." },
        { emoji: "😩", text: "足が重くてだるい..." },
        { emoji: "😩", text: "マッサージに行く時間がない..." },
        { emoji: "😢", text: "立ち仕事で毎日ヘトヘト" },
      ],
      bgImage: "images/v17-hook.jpg",
    },
    solution: {
      headline: ["自宅で極上", "足マッサージ"],
      features: [
        { icon: "🦶", text: "エアーバッグ全周包み込み" },
        { icon: "🌡️", text: "温熱ヒーター内蔵" },
        { icon: "📱", text: "リモコンで簡単操作" },
        { icon: "✨", text: "整体師監修プログラム" },
      ],
      productImage: "images/v17-product.jpg",
      bgImage: "images/v17-product.jpg",
    },
    proof: {
      title: "癒しの実感",
      stats: [
        { value: 96, suffix: "%", label: "むくみ改善実感", color: "#A29BFE" },
        { value: 94, suffix: "%", label: "満足度", color: "#FFD700" },
        { value: 10, suffix: "万台", label: "累計販売", color: "#341F97" },
      ],
      personImage: "images/v17-person.jpg",
    },
    cta: {
      badge: "🦶 リラックスキャンペーン",
      price: "9,800円",
      priceNote: "1年保証・送料無料",
      ctaText: "極上の癒しを体験",
      scarcity: "※ 在庫残り僅か",
      productImage: "images/v17-product.jpg",
      bgImage: "images/v17-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 18: ヘアオイル (Hair Oil)
  // ──────────────────────────────────────────────
  {
    id: "Video18-HairOil",
    title: "ヘアオイル",
    theme: {
      background: ["#F8B500", "#E17055", "#D63031"],
      overlay: "#1a1208",
    },
    hook: {
      lines: ["パサつく髪", "ツヤ髪に変わりたくない？"],
      bgImage: "images/v18-hook.jpg",
      accentColor: "#F8B500",
    },
    problem: {
      items: [
        { emoji: "😔", text: "髪がパサパサで広がる..." },
        { emoji: "😔", text: "枝毛・切れ毛がひどい..." },
        { emoji: "😔", text: "ヘアアイロンのダメージ..." },
        { emoji: "😢", text: "触りたくなる髪になりたい" },
      ],
      bgImage: "images/v18-hook.jpg",
    },
    solution: {
      headline: ["1滴でツヤ髪", "ヘアオイル"],
      features: [
        { icon: "💧", text: "アルガンオイル配合" },
        { icon: "🌹", text: "18種のボタニカル成分" },
        { icon: "🌸", text: "フローラルの香り" },
        { icon: "✨", text: "美容師共同開発" },
      ],
      productImage: "images/v18-product.jpg",
      bgImage: "images/v18-product.jpg",
    },
    proof: {
      title: "ツヤ髪の声",
      stats: [
        { value: 94, suffix: "%", label: "ツヤ実感", color: "#F8B500" },
        { value: 91, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 45, suffix: "万本", label: "累計販売", color: "#E17055" },
      ],
      personImage: "images/v18-person.jpg",
    },
    cta: {
      badge: "💧 ツヤ髪キャンペーン",
      price: "1,780円",
      priceNote: "2ヶ月分・送料無料",
      ctaText: "ツヤ髪を手に入れる",
      scarcity: "※ 初回限定特別価格",
      productImage: "images/v18-product.jpg",
      bgImage: "images/v18-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 19: ボディスクラブ (Body Scrub)
  // ──────────────────────────────────────────────
  {
    id: "Video19-BodyScrub",
    title: "ボディスクラブ",
    theme: {
      background: ["#FFECD2", "#FCB69F", "#FF6B6B"],
      overlay: "#1a1008",
    },
    hook: {
      lines: ["ガサガサ肌", "触られても平気？"],
      bgImage: "images/v19-hook.jpg",
      accentColor: "#FCB69F",
    },
    problem: {
      items: [
        { emoji: "😔", text: "肘・膝のザラつき..." },
        { emoji: "😔", text: "背中のブツブツ..." },
        { emoji: "😔", text: "古い角質で肌がくすむ..." },
        { emoji: "😢", text: "素肌を見せるのが恥ずかしい" },
      ],
      bgImage: "images/v19-hook.jpg",
    },
    solution: {
      headline: ["磨くだけツルスベ", "ボディスクラブ"],
      features: [
        { icon: "🧂", text: "天然シュガースクラブ" },
        { icon: "🌿", text: "シアバター保湿成分" },
        { icon: "🛁", text: "週2回のバスタイムに" },
        { icon: "✨", text: "エステサロン愛用品" },
      ],
      productImage: "images/v19-product.jpg",
      bgImage: "images/v19-product.jpg",
    },
    proof: {
      title: "ツルスベ実感",
      stats: [
        { value: 93, suffix: "%", label: "肌触り改善", color: "#FCB69F" },
        { value: 88, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 20, suffix: "万個", label: "累計販売", color: "#FF6B6B" },
      ],
      personImage: "images/v19-person.jpg",
    },
    cta: {
      badge: "🛁 ツルスベキャンペーン",
      price: "1,580円",
      priceNote: "大容量300g・送料無料",
      ctaText: "ツルスベ肌を体験",
      scarcity: "※ 初回限定価格",
      productImage: "images/v19-product.jpg",
      bgImage: "images/v19-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 20: ニキビパッチ (Acne Patch)
  // ──────────────────────────────────────────────
  {
    id: "Video20-AcnePatch",
    title: "ニキビパッチ",
    theme: {
      background: ["#81ECEC", "#00CEC9", "#00B894"],
      overlay: "#081a18",
    },
    hook: {
      lines: ["大事な日に限って", "ニキビが..."],
      bgImage: "images/v20-hook.jpg",
      accentColor: "#81ECEC",
    },
    problem: {
      items: [
        { emoji: "😫", text: "大事な日にニキビが出る..." },
        { emoji: "😫", text: "潰すと跡が残る..." },
        { emoji: "😫", text: "メイクで隠すと悪化..." },
        { emoji: "😢", text: "繰り返しニキビに悩む" },
      ],
      bgImage: "images/v20-hook.jpg",
    },
    solution: {
      headline: ["貼るだけケア", "ニキビパッチ"],
      features: [
        { icon: "🩹", text: "マイクロニードル技術" },
        { icon: "💊", text: "サリチル酸配合" },
        { icon: "🌙", text: "寝てる間にケア" },
        { icon: "✨", text: "皮膚科医共同開発" },
      ],
      productImage: "images/v20-product.jpg",
      bgImage: "images/v20-product.jpg",
    },
    proof: {
      title: "ニキビケアの声",
      stats: [
        { value: 91, suffix: "%", label: "翌朝改善実感", color: "#81ECEC" },
        { value: 85, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 100, suffix: "万箱", label: "累計販売", color: "#00B894" },
      ],
      personImage: "images/v20-person.jpg",
    },
    cta: {
      badge: "🩹 ニキビケアキャンペーン",
      price: "1,180円",
      priceNote: "36枚入り・送料無料",
      ctaText: "ニキビケアを始める",
      scarcity: "※ SNSで話題沸騰中",
      productImage: "images/v20-product.jpg",
      bgImage: "images/v20-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 21: 姿勢矯正ベルト (Posture Corrector)
  // ──────────────────────────────────────────────
  {
    id: "Video21-PostureCorrector",
    title: "姿勢矯正ベルト",
    theme: {
      background: ["#636E72", "#2D3436", "#0984E3"],
      overlay: "#0a1015",
    },
    hook: {
      lines: ["猫背で", "老けて見えてない？"],
      bgImage: "images/v21-hook.jpg",
      accentColor: "#74B9FF",
    },
    problem: {
      items: [
        { emoji: "😣", text: "デスクワークで猫背..." },
        { emoji: "😣", text: "肩こりがひどい..." },
        { emoji: "😣", text: "姿勢が悪いと言われる..." },
        { emoji: "😢", text: "見た目が5歳老けて見える" },
      ],
      bgImage: "images/v21-hook.jpg",
    },
    solution: {
      headline: ["つけるだけ美姿勢", "矯正ベルト"],
      features: [
        { icon: "🎯", text: "背筋を自然にサポート" },
        { icon: "🌡️", text: "メッシュ素材で蒸れない" },
        { icon: "👔", text: "服の下に着用OK" },
        { icon: "✨", text: "カイロプラクター監修" },
      ],
      productImage: "images/v21-product.jpg",
      bgImage: "images/v21-product.jpg",
    },
    proof: {
      title: "美姿勢の実感",
      stats: [
        { value: 90, suffix: "%", label: "姿勢改善実感", color: "#74B9FF" },
        { value: 86, suffix: "%", label: "肩こり軽減", color: "#FFD700" },
        { value: 30, suffix: "万個", label: "累計販売", color: "#636E72" },
      ],
      personImage: "images/v21-person.jpg",
    },
    cta: {
      badge: "🎯 美姿勢キャンペーン",
      price: "2,980円",
      priceNote: "サイズ交換無料",
      ctaText: "美姿勢を手に入れる",
      scarcity: "※ 在庫残りわずか",
      productImage: "images/v21-product.jpg",
      bgImage: "images/v21-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 22: リッププランパー (Lip Plumper)
  // ──────────────────────────────────────────────
  {
    id: "Video22-LipPlumper",
    title: "リッププランパー",
    theme: {
      background: ["#FF6B6B", "#EE5A24", "#C44569"],
      overlay: "#1a0810",
    },
    hook: {
      lines: ["唇のボリューム", "もっと欲しくない？"],
      bgImage: "images/v22-hook.jpg",
      accentColor: "#FF6B6B",
    },
    problem: {
      items: [
        { emoji: "😔", text: "唇が薄くて寂しい..." },
        { emoji: "😔", text: "ヒアルロン注射は怖い..." },
        { emoji: "😔", text: "リップが映えない..." },
        { emoji: "😢", text: "ぷるんとした唇が理想" },
      ],
      bgImage: "images/v22-hook.jpg",
    },
    solution: {
      headline: ["塗るだけぷるん", "リッププランパー"],
      features: [
        { icon: "💋", text: "唐辛子エキスでボリュームUP" },
        { icon: "💎", text: "ヒアルロン酸配合" },
        { icon: "🌹", text: "グロスとしても使える" },
        { icon: "✨", text: "美容家プロデュース" },
      ],
      productImage: "images/v22-product.jpg",
      bgImage: "images/v22-product.jpg",
    },
    proof: {
      title: "ぷるん唇の声",
      stats: [
        { value: 92, suffix: "%", label: "ボリュームUP実感", color: "#FF6B6B" },
        { value: 89, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 15, suffix: "万本", label: "累計販売", color: "#C44569" },
      ],
      personImage: "images/v22-person.jpg",
    },
    cta: {
      badge: "💋 ぷるん唇キャンペーン",
      price: "1,680円",
      priceNote: "2本セット・送料無料",
      ctaText: "ぷるん唇を体験",
      scarcity: "※ SNS人気No.1",
      productImage: "images/v22-product.jpg",
      bgImage: "images/v22-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 23: MCTオイル (MCT Oil)
  // ──────────────────────────────────────────────
  {
    id: "Video23-MCTOil",
    title: "MCTオイル",
    theme: {
      background: ["#00B894", "#55E6C1", "#7BED9F"],
      overlay: "#081a10",
    },
    hook: {
      lines: ["かけるだけで", "脂肪が燃える？"],
      bgImage: "images/v23-hook.jpg",
      accentColor: "#55E6C1",
    },
    problem: {
      items: [
        { emoji: "😤", text: "糖質制限がキツい..." },
        { emoji: "😤", text: "エネルギーが足りない..." },
        { emoji: "😤", text: "空腹感に負ける..." },
        { emoji: "😢", text: "効率よく脂肪を燃やしたい" },
      ],
      bgImage: "images/v23-hook.jpg",
    },
    solution: {
      headline: ["かけるだけ", "MCTオイル"],
      features: [
        { icon: "🥥", text: "C8・C10高純度MCT" },
        { icon: "☕", text: "コーヒーにひとさじ" },
        { icon: "⚡", text: "即エネルギー変換" },
        { icon: "✨", text: "管理栄養士推奨" },
      ],
      productImage: "images/v23-product.jpg",
      bgImage: "images/v23-product.jpg",
    },
    proof: {
      title: "ケトジェニックの味方",
      stats: [
        { value: 93, suffix: "%", label: "満腹感持続", color: "#55E6C1" },
        { value: 88, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 40, suffix: "万本", label: "累計販売", color: "#00B894" },
      ],
      personImage: "images/v23-person.jpg",
    },
    cta: {
      badge: "🥥 ケトダイエット応援",
      price: "1,480円",
      priceNote: "250ml・送料無料",
      ctaText: "MCTを始める",
      scarcity: "※ 初回限定価格",
      productImage: "images/v23-product.jpg",
      bgImage: "images/v23-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 24: ハンドクリーム (Hand Cream)
  // ──────────────────────────────────────────────
  {
    id: "Video24-HandCream",
    title: "ハンドクリーム",
    theme: {
      background: ["#FFECD2", "#F8B500", "#E17055"],
      overlay: "#1a1208",
    },
    hook: {
      lines: ["手荒れで", "年齢バレてない？"],
      bgImage: "images/v24-hook.jpg",
      accentColor: "#F8B500",
    },
    problem: {
      items: [
        { emoji: "😔", text: "手がカサカサ..." },
        { emoji: "😔", text: "あかぎれが痛い..." },
        { emoji: "😔", text: "水仕事のたびに悪化..." },
        { emoji: "😢", text: "手を見せるのが恥ずかしい" },
      ],
      bgImage: "images/v24-hook.jpg",
    },
    solution: {
      headline: ["塗るだけしっとり", "ハンドクリーム"],
      features: [
        { icon: "🤲", text: "シアバター30%配合" },
        { icon: "🌹", text: "ローズヒップオイル" },
        { icon: "💧", text: "べたつかない処方" },
        { icon: "✨", text: "美容部員愛用" },
      ],
      productImage: "images/v24-product.jpg",
      bgImage: "images/v24-product.jpg",
    },
    proof: {
      title: "しっとりの声",
      stats: [
        { value: 95, suffix: "%", label: "保湿力実感", color: "#F8B500" },
        { value: 92, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 60, suffix: "万本", label: "累計販売", color: "#E17055" },
      ],
      personImage: "images/v24-person.jpg",
    },
    cta: {
      badge: "🤲 しっとりキャンペーン",
      price: "980円",
      priceNote: "50g・送料無料",
      ctaText: "しっとり手肌を体験",
      scarcity: "※ 冬の特別価格",
      productImage: "images/v24-product.jpg",
      bgImage: "images/v24-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 25: ブルーライトメガネ (Blue Light Glass)
  // ──────────────────────────────────────────────
  {
    id: "Video25-BlueLightGlass",
    title: "ブルーライトメガネ",
    theme: {
      background: ["#0984E3", "#6C5CE7", "#A29BFE"],
      overlay: "#080a1a",
    },
    hook: {
      lines: ["PC作業で", "目が限界じゃない？"],
      bgImage: "images/v25-hook.jpg",
      accentColor: "#74B9FF",
    },
    problem: {
      items: [
        { emoji: "😵", text: "目が疲れてショボショボ..." },
        { emoji: "😵", text: "ブルーライトで不眠..." },
        { emoji: "😵", text: "頭痛が頻繁に..." },
        { emoji: "😢", text: "でもPCなしでは仕事できない" },
      ],
      bgImage: "images/v25-hook.jpg",
    },
    solution: {
      headline: ["かけるだけ目に優しい", "PCメガネ"],
      features: [
        { icon: "👓", text: "ブルーライト50%カット" },
        { icon: "💎", text: "超軽量チタンフレーム" },
        { icon: "🎨", text: "おしゃれな10色展開" },
        { icon: "✨", text: "眼科医推奨レンズ" },
      ],
      productImage: "images/v25-product.jpg",
      bgImage: "images/v25-product.jpg",
    },
    proof: {
      title: "目の楽さ実感",
      stats: [
        { value: 94, suffix: "%", label: "目の疲れ軽減", color: "#74B9FF" },
        { value: 88, suffix: "%", label: "睡眠改善", color: "#FFD700" },
        { value: 25, suffix: "万本", label: "累計販売", color: "#A29BFE" },
      ],
      personImage: "images/v25-person.jpg",
    },
    cta: {
      badge: "👓 PC疲れ対策キャンペーン",
      price: "2,980円",
      priceNote: "ケース付き・送料無料",
      ctaText: "目に優しさを",
      scarcity: "※ カラー限定在庫あり",
      productImage: "images/v25-product.jpg",
      bgImage: "images/v25-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 26: スカルプシャンプー (Scalp Shampoo)
  // ──────────────────────────────────────────────
  {
    id: "Video26-ScalpShampoo",
    title: "スカルプシャンプー",
    theme: {
      background: ["#1ABC9C", "#2ECC71", "#27AE60"],
      overlay: "#081a10",
    },
    hook: {
      lines: ["頭皮のベタつき", "臭い大丈夫？"],
      bgImage: "images/v26-hook.jpg",
      accentColor: "#2ECC71",
    },
    problem: {
      items: [
        { emoji: "😰", text: "頭皮がベタつく..." },
        { emoji: "😰", text: "フケが出る..." },
        { emoji: "😰", text: "頭皮の臭いが気になる..." },
        { emoji: "😢", text: "市販シャンプーじゃダメ" },
      ],
      bgImage: "images/v26-hook.jpg",
    },
    solution: {
      headline: ["洗うだけ頭皮ケア", "スカルプシャンプー"],
      features: [
        { icon: "🧴", text: "アミノ酸系洗浄成分" },
        { icon: "🌿", text: "ティーツリー＆ミント" },
        { icon: "💧", text: "保湿＆フケ防止" },
        { icon: "✨", text: "毛髪診断士開発" },
      ],
      productImage: "images/v26-product.jpg",
      bgImage: "images/v26-product.jpg",
    },
    proof: {
      title: "頭皮ケア実感",
      stats: [
        { value: 94, suffix: "%", label: "頭皮スッキリ", color: "#2ECC71" },
        { value: 90, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 50, suffix: "万本", label: "累計販売", color: "#27AE60" },
      ],
      personImage: "images/v26-person.jpg",
    },
    cta: {
      badge: "🧴 頭皮ケアキャンペーン",
      price: "1,980円",
      priceNote: "300ml・送料無料",
      ctaText: "頭皮ケアを始める",
      scarcity: "※ 初回半額キャンペーン",
      productImage: "images/v26-product.jpg",
      bgImage: "images/v26-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 27: 電動歯ブラシ (Electric Brush)
  // ──────────────────────────────────────────────
  {
    id: "Video27-ElectricBrush",
    title: "電動歯ブラシ",
    theme: {
      background: ["#DFE6E9", "#74B9FF", "#0984E3"],
      overlay: "#080a18",
    },
    hook: {
      lines: ["手磨きで", "ちゃんと磨けてる？"],
      bgImage: "images/v27-hook.jpg",
      accentColor: "#74B9FF",
    },
    problem: {
      items: [
        { emoji: "😬", text: "歯磨きに自信がない..." },
        { emoji: "😬", text: "歯医者で毎回注意される..." },
        { emoji: "😬", text: "電動歯ブラシは高い..." },
        { emoji: "😢", text: "虫歯になりたくない" },
      ],
      bgImage: "images/v27-hook.jpg",
    },
    solution: {
      headline: ["振動で完璧に", "電動歯ブラシ"],
      features: [
        { icon: "🦷", text: "毎分40,000回振動" },
        { icon: "📱", text: "磨き残しセンサー" },
        { icon: "🔋", text: "USB充電で60日持続" },
        { icon: "✨", text: "歯科医師推奨" },
      ],
      productImage: "images/v27-product.jpg",
      bgImage: "images/v27-product.jpg",
    },
    proof: {
      title: "歯科医も認める",
      stats: [
        { value: 97, suffix: "%", label: "歯垢除去率", color: "#74B9FF" },
        { value: 92, suffix: "%", label: "満足度", color: "#FFD700" },
        { value: 20, suffix: "万本", label: "累計販売", color: "#0984E3" },
      ],
      personImage: "images/v27-person.jpg",
    },
    cta: {
      badge: "🦷 口腔ケアキャンペーン",
      price: "3,980円",
      priceNote: "替えブラシ3本付き",
      ctaText: "完璧な歯磨きを",
      scarcity: "※ 在庫残りわずか",
      productImage: "images/v27-product.jpg",
      bgImage: "images/v27-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 28: 筋肉リカバリーパッチ (Muscle Patch)
  // ──────────────────────────────────────────────
  {
    id: "Video28-MusclePatch",
    title: "筋肉リカバリーパッチ",
    theme: {
      background: ["#2C3E50", "#E74C3C", "#C0392B"],
      overlay: "#1a0808",
    },
    hook: {
      lines: ["筋肉痛が", "翌日もツラくない？"],
      bgImage: "images/v28-hook.jpg",
      accentColor: "#E74C3C",
    },
    problem: {
      items: [
        { emoji: "😤", text: "筋肉痛で動けない..." },
        { emoji: "😤", text: "リカバリーが遅い..." },
        { emoji: "😤", text: "筋トレの頻度が上がらない..." },
        { emoji: "😢", text: "もっと効率よくトレーニングしたい" },
      ],
      bgImage: "images/v28-hook.jpg",
    },
    solution: {
      headline: ["貼るだけリカバリー", "筋肉パッチ"],
      features: [
        { icon: "💪", text: "メントール＆アルニカ配合" },
        { icon: "🌡️", text: "遠赤外線で血行促進" },
        { icon: "🩹", text: "貼って寝るだけ" },
        { icon: "✨", text: "アスリート御用達" },
      ],
      productImage: "images/v28-product.jpg",
      bgImage: "images/v28-product.jpg",
    },
    proof: {
      title: "リカバリー実感",
      stats: [
        { value: 93, suffix: "%", label: "回復スピードUP", color: "#E74C3C" },
        { value: 89, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 30, suffix: "万箱", label: "累計販売", color: "#C0392B" },
      ],
      personImage: "images/v28-person.jpg",
    },
    cta: {
      badge: "💪 リカバリーキャンペーン",
      price: "1,980円",
      priceNote: "30枚入り・送料無料",
      ctaText: "リカバリーを加速",
      scarcity: "※ アスリート限定価格",
      productImage: "images/v28-product.jpg",
      bgImage: "images/v28-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 29: 日焼け止めジェル (Sunscreen Gel)
  // ──────────────────────────────────────────────
  {
    id: "Video29-SunscreenGel",
    title: "日焼け止めジェル",
    theme: {
      background: ["#FFEAA7", "#FDCB6E", "#E17055"],
      overlay: "#1a1508",
    },
    hook: {
      lines: ["紫外線対策", "本当にできてる？"],
      bgImage: "images/v29-hook.jpg",
      accentColor: "#FFEAA7",
    },
    problem: {
      items: [
        { emoji: "😰", text: "日焼け止めが白浮きする..." },
        { emoji: "😰", text: "ベタベタして不快..." },
        { emoji: "😰", text: "塗り直しが面倒..." },
        { emoji: "😢", text: "シミが増えるのが怖い" },
      ],
      bgImage: "images/v29-hook.jpg",
    },
    solution: {
      headline: ["塗った感ゼロ", "UVジェル"],
      features: [
        { icon: "☀️", text: "SPF50+ PA++++" },
        { icon: "💧", text: "ジェルで透明仕上がり" },
        { icon: "🌊", text: "ウォータープルーフ" },
        { icon: "✨", text: "化粧下地にもOK" },
      ],
      productImage: "images/v29-product.jpg",
      bgImage: "images/v29-product.jpg",
    },
    proof: {
      title: "UV対策の声",
      stats: [
        { value: 96, suffix: "%", label: "使用感満足", color: "#FFEAA7" },
        { value: 93, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 80, suffix: "万本", label: "累計販売", color: "#E17055" },
      ],
      personImage: "images/v29-person.jpg",
    },
    cta: {
      badge: "☀️ UV対策キャンペーン",
      price: "1,280円",
      priceNote: "80ml・送料無料",
      ctaText: "UV対策を始める",
      scarcity: "※ 夏の限定価格",
      productImage: "images/v29-product.jpg",
      bgImage: "images/v29-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 30: 鉄分サプリ (Iron Supplement)
  // ──────────────────────────────────────────────
  {
    id: "Video30-IronSupplement",
    title: "鉄分サプリ",
    theme: {
      background: ["#E74C3C", "#C0392B", "#8B2252"],
      overlay: "#1a0810",
    },
    hook: {
      lines: ["朝からフラフラ", "鉄分足りてる？"],
      bgImage: "images/v30-hook.jpg",
      accentColor: "#E74C3C",
    },
    problem: {
      items: [
        { emoji: "😵", text: "めまいがする..." },
        { emoji: "😵", text: "疲れやすい..." },
        { emoji: "😵", text: "顔色が悪いと言われる..." },
        { emoji: "😢", text: "食事だけでは鉄分が足りない" },
      ],
      bgImage: "images/v30-hook.jpg",
    },
    solution: {
      headline: ["飲むだけ鉄活", "ヘム鉄サプリ"],
      features: [
        { icon: "🩸", text: "吸収率の高いヘム鉄" },
        { icon: "🍊", text: "ビタミンC＆葉酸配合" },
        { icon: "💊", text: "1日1粒で手軽" },
        { icon: "✨", text: "産婦人科医推奨" },
      ],
      productImage: "images/v30-product.jpg",
      bgImage: "images/v30-product.jpg",
    },
    proof: {
      title: "元気の実感",
      stats: [
        { value: 94, suffix: "%", label: "疲れ改善実感", color: "#E74C3C" },
        { value: 90, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 35, suffix: "万袋", label: "累計販売", color: "#8B2252" },
      ],
      personImage: "images/v30-person.jpg",
    },
    cta: {
      badge: "🩸 鉄活キャンペーン",
      price: "980円",
      priceNote: "30日分・送料無料",
      ctaText: "鉄活を始める",
      scarcity: "※ 女性応援価格",
      productImage: "images/v30-product.jpg",
      bgImage: "images/v30-product.jpg",
    },
  },

  // ──────────────────────────────────────────────
  // 31: デトックスティー (Detox Tea)
  // ──────────────────────────────────────────────
  {
    id: "Video31-DetoxTea",
    title: "デトックスティー",
    theme: {
      background: ["#55E6C1", "#26DE81", "#20BF6B"],
      overlay: "#081a10",
    },
    hook: {
      lines: ["溜め込んだ毒素", "出せてる？"],
      bgImage: "images/v31-hook.jpg",
      accentColor: "#55E6C1",
    },
    problem: {
      items: [
        { emoji: "😣", text: "むくみが取れない..." },
        { emoji: "😣", text: "肌荒れが続く..." },
        { emoji: "😣", text: "体が重い..." },
        { emoji: "😢", text: "内側からスッキリしたい" },
      ],
      bgImage: "images/v31-hook.jpg",
    },
    solution: {
      headline: ["飲むだけスッキリ", "デトックスティー"],
      features: [
        { icon: "🍵", text: "12種のハーブブレンド" },
        { icon: "🌿", text: "ルイボス＆ゴボウ茶" },
        { icon: "☕", text: "ノンカフェインで安心" },
        { icon: "✨", text: "漢方薬剤師監修" },
      ],
      productImage: "images/v31-product.jpg",
      bgImage: "images/v31-product.jpg",
    },
    proof: {
      title: "スッキリの声",
      stats: [
        { value: 92, suffix: "%", label: "むくみ改善", color: "#55E6C1" },
        { value: 88, suffix: "%", label: "リピート率", color: "#FFD700" },
        { value: 25, suffix: "万箱", label: "累計販売", color: "#20BF6B" },
      ],
      personImage: "images/v31-person.jpg",
    },
    cta: {
      badge: "🍵 デトックスキャンペーン",
      price: "1,280円",
      priceNote: "30包入り・送料無料",
      ctaText: "デトックスを始める",
      scarcity: "※ 初回限定価格",
      productImage: "images/v31-product.jpg",
      bgImage: "images/v31-product.jpg",
    },
  },
];
