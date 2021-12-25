class Friend
{
  constructor(name, maxHp, offense, speed, herb, herbPower)
  {
    this.name = name;            // 名前
    this.type = "friend";        // 敵味方種別
    this.maxHp = maxHp;          // 最大体力
    this.hp = maxHp;             // 体力
    this.liveFlag = true;        // 生存フラグ
    this.offense = offense;      // 攻撃力
    this.speed = speed;          // 素早さ
    this.herb = herb;            // 薬草
    this.herbPower = herbPower;  // 薬草の回復力

    this.command = "";           // 選択されたコマンド
    this.target = "";            // ターゲット
  }
  
  action()
  {
    if(this.hp > 0) {
      // コマンドに応じた処理を行う
      switch(this.command) {
        // 攻撃
        case "enemyCommand":
          this.attack();
          break;
        // 回復
        case "recoveryCommand":
          this.recovery();
          break;
        default:
          Message.printMessage(this.name + "はボーッとした<br>");
      }
    }
  }
  
  attack()
  {
    // 攻撃相手が生存していれば攻撃する
    if(this.target.liveFlag) {
      // 敵の体力から、自分の攻撃力を引く
      this.target.hp -= this.offense;

      // 攻撃相手の体力がマイナスになる場合は、0にする
      if(this.target.hp < 0) {
        this.target.hp = 0;
      }

      Message.printMessage(this.name + "の攻撃<br>" +
                           this.target.name + "に" + this.offense + "のダメージを与えた！<br>");
    }
    else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + this.target.name + "は倒れている<br>");
    }
  }
  
  attack()
  {
    // 攻撃相手が生存していれば攻撃する
    if(this.target.liveFlag) {
      // 敵の体力から、自分の攻撃力を引く
      this.target.hp -= this.offense;

      // 攻撃相手の体力がマイナスになる場合は、0にする
      if(this.target.hp < 0) {
        this.target.hp = 0;
      }

      Message.printMessage(this.name + "の攻撃<br>" +
                           this.target.name + "に" + this.offense + "のダメージを与えた！<br>");
    }
    else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + this.target.name + "は倒れている<br>");
    }
  }
  
  recovery()
  {
    // 薬草がない場合
    if(this.herb <= 0) {
      Message.printMessage(this.name + "は薬草を・・・<br>薬草がない！<br>");
      return;
    }

    // 体力が最大体力の場合
    if(this.maxHp == this.hp) {
      Message.printMessage(this.name + "は薬草を・・・<br>これ以上回復できない！<br>");
      return;
    }
		
    // 回復する値
    let heal = this.herbPower;

    // 最大体力を超えて回復してしまいそうな場合
    if(this.maxHp - this.hp < this.herbPower) {
      heal = this.maxHp - this.hp;
    }

    // 体力を回復する
    this.hp += heal;

    // 薬草をひとつ減らす
    --this.herb;

    Message.printMessage(this.name + "は薬草を飲んだ<br>体力が" + heal + "回復した！<br>");
  }
}

class Enemy
{
  // コンストラクタ
  constructor(name, hp, offense, speed, path)
  {
    this.name = name;        // 名前
    this.type = "enemy";     // 敵味方種別
    this.hp = hp;            // 体力
    this.liveFlag = true;    // 生存フラグ
    this.offense = offense;  // 攻撃力
    this.speed = speed;      // 素早さ
    this.path = path         // 画像の場所
  }

  // 行動する
  action()
  {
    if(this.hp > 0) {
      this.attack();
    }
  }
}

//省略
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 敵クラス
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Enemy
{
  //省略
}

// ========== ここから追加する ==========
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// トロルクラス
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Troll extends Enemy
{
  // コンストラクタ
  constructor(name, hp, offense, speed, path)
  {
    super(name, hp, offense, speed, path);
  }

  // 攻撃メソッド
  attack()
  {
    // 生存している味方をランダムに選択する
    let f = characters[searchLivedcharacterRamdom("friend")];

    // 攻撃対象の体力から、自分の攻撃力を引く
    f.hp -= this.offense;

    // 攻撃相手の体力がマイナスになる場合は0にする
    if(f.hp < 0) {
      f.hp = 0;
    }

    // 攻撃相手が生存していれば攻撃
    if(f.liveFlag) {
      Message.printMessage(this.name + "が襲いかかってきた<br>" +
                           f.name + "は" + this.offense + "のダメージを受けた！<br>");
    }
    else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + f.name + "は倒れている<br>");
    }
  }
}

class Message
{
  // メッセージを表示する
  static printMessage(text)
  {
    messageView.innerHTML = text;
  }

  // メッセージを追加する
  static addMessage(text)
  {
    messageView.innerHTML += text;
  }
}

Message.printMessage("あれすの攻撃<br>");
Message.addMessage("トロルに20のダメージを与えた！<br>");
