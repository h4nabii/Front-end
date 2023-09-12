# PHP 与 MySQL

服务器端语言：java php...

1. php

    1. 变量

       `$var_name = value`;

    2. 字符串

       `""` `''`  单双引号嵌套  `""`解析变量再输出 `''`直接当字符串输出

       字符串拼接 `.` e.g. `$str = "my name is" . "Li Hua";`

    3. 数组

       `$arr = array(key => value, ...)`

       `$arr = array(array(key => value, ...), array(key => value, ...), ...)`

    4. 预定义变量

       `$_GET['变量名'];`
       `$_POST['变量名'];`

2. mysql

    1. 查询

       `select 字段列表 from 表名 where 条件;`

       `select * from userinfo where username='张三';`

    2. 插入

       `insert into 表名(字段1, ...) values(值1, ...);`

    3. 修改

       `update 表名 set 字段='新值' where id=1;`

    4. 删除

       `delete from 表名 where 条件;`
