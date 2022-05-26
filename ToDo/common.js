//残り課題 複数のliを作成すると編集ができないので対策。オリジナル機能

//文字の入力画面
const tasktext = document.getElementsByClassName('text_form')[0];
//送信ボタン
const tasksubmit = document.getElementsByClassName('submit')[0];
//ToDoリスト
const tasklist = document.getElementsByClassName('list')[0];
//連番
let n = 1;
//オリジナル機能（時間）
const now = new Date(); //初期化
const hour = now.getHours(); //時間取得
const min = now.getMinutes(); //分取得
const output = hour + '時' + min + '分'; //出力

//追加ボタン
    const addtasks = (task) =>{
        //タスクの追加
        const listitem = document.createElement('li');
        listitem.setAttribute("id","task"+n);
        const showitem = tasklist.appendChild(listitem);
        showitem.innerHTML = task;
        //チェックボックス追加
        const check = document.createElement('input');
        check.setAttribute("type","checkbox");
        listitem.appendChild(check);
        //タスクの編集ボタン追加
        const editbutton = document.createElement('button');
        editbutton.setAttribute("id","task"+n);
        editbutton.innerHTML = '編集';
        listitem.appendChild(editbutton);
        n = n + 1;
        //編集ボタンを押したときの動作
        editbutton.addEventListener('click',function(){
            const edit = document.createElement('input');
        edit.setAttribute("type","text");
        edit.setAttribute("id","text");
        var decide = document.createElement('button');
        decide.setAttribute("onclick","change(this)"); //thisでクリックしたボタンを指定
        decide.innerHTML = '決定';
        listitem.appendChild(decide);
        listitem.appendChild(edit);
        });
        //タスクの削除ボタン追加
        const deleatebutton = document.createElement('button');
        deleatebutton.innerHTML = '削除';
        listitem.appendChild(deleatebutton);
        //タスクを削除する時の動作
        deleatebutton.addEventListener('click',evt => {
            evt.preventDefault();
            deleatetasks(deleatebutton);
        });
        //オリジナル機能（時間）
        const test = document.createElement('span');
        test.innerHTML = output;
        listitem.appendChild(test); 
    };

    //決定ボタンを押したときの動作
    function change(ele){
        var target = document.getElementById('text');
        const change_task = target.value;
        var id_value = ele.closest('li').id; //クリックしたボタンのliのid取得
        //console.log(id_value); ID取得確認用
        const task_text = document.getElementById(id_value);
        task_text.innerHTML = change_task + "<input type=checkbox>" + "<button onclick=chan(this)>編集</button>" + "<button onclick=dele(this)>削除</button>" + output ;
    }
    //編集前のタスク削除機能
    const deleatetasks = (deleatebutton) =>{
        const chosentask = deleatebutton.closest('li');
        tasklist.removeChild(chosentask);
    };
    //編集後の削除ボタン
    function dele(ele){
        var id_value = ele.closest('li').id;
        const chosentask = document.getElementById(id_value); //task_textを変更
        tasklist.removeChild(chosentask);
    };
    //編集後の編集ボタン
    function chan(ele){
        var id_value = ele.closest('li').id;
        const listitem = document.getElementById(id_value);
        const edit = document.createElement('input');
        edit.setAttribute("type","text");
        edit.setAttribute("id","text");
        var decide = document.createElement('button');
        decide.setAttribute("onclick","change(this)");
        decide.innerHTML = '決定';
        listitem.appendChild(decide);
        listitem.appendChild(edit);
    }

    //追加ボタンを押した時の動作
    function add(){
    const task = tasktext.value;
    addtasks(task);
    tasktext.value = '';
    };
