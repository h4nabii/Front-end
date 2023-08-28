常用的CSS命名规则

1. 注释的写法：
   `/* Footer */`

2. id 的命名:
    
    1. 页面结构
       
       | 用途  | 命名                  |
       |-----|---------------------|
       | 容器  | container           | 
       | 内容  | content / container |
       | 主体  | main                |
       | 页头  | header              |
       | 页尾  | footer              |
       | 导航  | nav                 |
       | 侧栏  | sidebar             |
       | 栏目  | column              |
       | 包装  | wrapper             |
       | 左右中 | left, right, center |
    
    2. 导航
       
       | 用途  | 命名             |
       |-----|----------------|
       | 导航  | nav            |
       | 主导航 | main-nav       |
       | 子导航 | sub-nav        |
       | 顶导航 | top-nav        |
       | 边导航 | side-bar       |
       | 左导航 | left-side-bar  |
       | 右导航 | right-side-bar |
       | 菜单  | menu           |
       | 子菜单 | sub-menu       |
       | 标题  | title          |
       | 摘要  | summary        |
    
    3. 功能
       
       | 用途   | 命名        |
       |------|-----------|
       | 标志   | logo      |
       | 广告   | banner    |
       | 登陆   | login     |
       | 登录条  | login-bar |
       | 注册   | register  |
       | 搜索   | search    |
       | 功能区  | shop      |
       | 标题   | title     |
       | 加入   | join-us   |
       | 状态   | status    |
       | 按钮   | btn       |
       | 滚动   | scroll    |
       | 标签页  | tab       |
       | 文章列表 | list      |
       | 提示信息 | msg       |
       | 当前的  | current   |
       | 小技巧  | tips      |
       | 图标   | icon      |
       | 注释   | note      |
       | 指南   | guild     |
       | 服务   | service   |
       | 热点   | hot       |
       | 新闻   | news      |
       | 下载   | download  |
       | 投票   | vote      |
       | 合作伙伴 | partner   |
       | 友情链接 | link      |
       | 版权   | copyright |

3. class的命名:
    1. 颜色:使用颜色的名称或者16进制代码,如   
       .red { color: red; }   
       .f60 { color: #f60; }   
       .ff8600 { color: #ff8600; }
    
    2. 字体大小,直接使用”font+字体大小”作为名称,如  
       .font12px { font-size: 12px; }   
       .font9pt {font-size: 9pt; }
    
    3. 对齐样式,使用对齐目标的英文名称,如   
       .left { float:left; }    
       .bottom { float:bottom; }
    
    4. 标题栏样式,使用”类别+功能”的方式命名,如   
       .bar-news { }   
       .bar-product { }

4. 文件名
   
   | 用途    | 命名          |
   |-------|-------------|
   | 主要的   | master.css  |
   | 模块    | module.css  |
   | 基本共用  | base.css    |
   | 布局，版面 | layout.css  |
   | 主题    | themes.css  |
   | 专栏    | columns.css |
   | 文字    | font.css    |
   | 表单    | forms.css   |
   | 补丁    | mend.css    |
   | 打印    | print.css   |
