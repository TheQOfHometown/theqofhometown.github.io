var posts=["2024/04/14/SVC虚拟歌手/","2024/04/14/AAA环境配置常用命令/","2024/03/04/Hello World！/","2024/09/06/VAE变分自编码器/","2024/04/15/一个异环境多项目串联解决方案/","2024/04/25/初窥人工智能时代（科普向）/","2024/04/23/记事本无法正常关闭/","2024/03/11/调用ChatGLM实现信息总结/","2024/04/29/学委小助手/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };