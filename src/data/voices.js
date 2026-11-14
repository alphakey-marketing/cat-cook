// VOICEVOX 角色 ID（credit 要寫：VOICEVOX:名字）
// credit：官方指定嘅寫法，設定頁直接照印。條款核對見 docs/VOICE_LICENSE.md
export const VOICES = {
  cat: { id: 8, name: '春日部つむぎ' },      // 小黑
  word: { id: 14, name: '冥鳴ひまり' },      // 單詞讀音
  usagi: { id: 10, name: '雨晴はう' },
  kuma: { id: 11, name: '玄野武宏' },
  kitsune: { id: 2, name: '四国めたん' },
  tanuki: { id: 12, name: '白上虎太郎' },
  shiba: { id: 13, name: '青山龍星' },       // 條件：個人可商用；企業參與要先問「ななはぴ」
  maneki: { id: 20, name: 'もち子さん', credit: 'もち子(cv 明日葉よもぎ)' }, // ⚠️ 規約排除「ゲーム作品」→ 賣之前要換聲
};

export const CUSTOMER_VOICES = ['usagi', 'kuma', 'kitsune', 'tanuki', 'shiba', 'maneki'];
