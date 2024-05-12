var posts=["2024/03/04/Hello World！/","2024/04/01/pyautogui的使用/","2024/03/28/python与剪映的联动/","2024/04/14/svc炼丹小记/","2024/04/25/初窥人工智能时代/","2024/04/29/看看是谁还没有交作业/","2024/04/23/解决记事本被删除文件卡死进程的问题/","2024/03/11/记录一次折腾chatglm的经历/","2024/04/15/通过调用命令行串联多个项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };