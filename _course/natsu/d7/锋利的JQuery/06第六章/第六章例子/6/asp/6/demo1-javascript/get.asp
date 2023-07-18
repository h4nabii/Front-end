<%
 Dim username
 username=request("username");
 If username=="张三" Then
    response.write "张三你好"
  Else
    response.write "你不是张三"
 End if
%>