// 创建用户数据中心

var userarr = [
    { username: '苹果', acc: '1', sex: '水果', state: '上架' },
    { username: '草莓', acc: '2', sex: '水果', state: '删除' },
    { username: '橙子', acc: '3', sex: '水果', state: '上架' },
    { username: '香蕉', acc: '4', sex: '水果', state: '上架' },
    { username: '香', acc: '5', sex: '水果', state: '上架' },
    { username: '草莓1', acc: '4', sex: '水果', state: '上架' }
  ]

// 显示数据的公共函数 showTable

  showTable()
  
  function showTable() {
    var tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
  
    var str = ''
  
    console.log(userarr)
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].state == '删除') {
        continue
      }
      str += '<tr>'
      str +=
        "<td> <input type='checkbox' value='" +
        userarr[i].username +
        "' name='user'  onclick='oneChose()' >  </td>"
      str += '<td>' + userarr[i].username + '</td>'
      str += '<td>' + userarr[i].acc + '</td>'
      str += '<td>' + userarr[i].sex + '</td>'
      str += '<td>' + userarr[i].state + '</td>'
      str +=
        '<td><input  class="btnG"  type="button" value="' +
        (userarr[i].state == '上架' ? '下架' : '上架') +
        '"  onclick=' +
        'stateHandle("' +
        userarr[i].acc +
        '")' +
        '><input  class="btnG"  type="button" value=" 修改"  onclick=' +
        'updateDataFun("' +
        userarr[i].acc +
        '")' +
        '><input  class="btnG"  type="button" value=" 删除"  onclick=' +
        'delDataFun("' +
        userarr[i].acc +
        '")' +
        '></td>'
  
      str += '</tr>'
    }
  
    tbody.innerHTML = str
  }

  function stateHandle(acc) {
    // 状态处理函数，接收一个外部参数

    var re = confirm('确定操作吗')
    if (!re) return
    for (let j = 0; j < userarr.length; j++) {
      if (userarr[j].acc == acc) {
        userarr[j].state = userarr[j].state == '上架' ? '下降' : '上架'
      }
    }
    showTable()
  }
  
  function hidder() {
    document.getElementById('zhezhao').style.display = 'none'
    document.getElementById('zhezhao2').style.display = 'none'
  }
  

  // update

  var idN
  function updateDataFun(acc) {
    var re = confirm('确定操作吗')
    if (!re) return
    document.getElementById('zhezhao').style.display = 'block'
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].acc == acc) {
        document.getElementById('accNN').value = userarr[i].username
        document.getElementById('pwdNN').value = acc
        document.getElementById('goodsNN').value = userarr[i].sex
        idN = i
      }
    }
  }
  
  function sureBtn() {
    userarr[idN].username = document.getElementById('accNN').value
    userarr[idN].acc = document.getElementById('pwdNN').value
    userarr[idN].sex = document.getElementById('goodsNN').value
  
    document.getElementById('zhezhao').style.display = 'none'
    showTable()
  }

  // delete

  function delDataFun(acc) {
    var re = confirm('确定操作吗')
    if (!re) return
  
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].acc == acc) {
        userarr[i].state = '删除'
        alert('删除成功')
      }
    }
    showTable()
  }

  function btnG() {
    document.getElementById('zhezhao2').style.display = 'block'
  }

  function addSure() {
    var ad = {
      username: document.getElementById('accNNN').value,
      acc: document.getElementById('pwdNNN').value,
      sex: document.getElementById('goodsNNN').value,
      state: '上架'
    }
    userarr.push(ad)
    document.getElementById('zhezhao2').style.display = 'none'
    alert('添加成功')
    showTable()
  }
  
  function allChose() {
    var allBtn = document.getElementById('allChose').checked
    var list = document.getElementsByName('user')
    for (let i = 0; i < list.length; i++) {
      list[i].checked = allBtn
    }
  }

  function oneChose() {
    console.log('aaaa')
    var list = document.getElementsByName('user')
    var sum = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked) {
        sum++
      }
    }
    if (sum == list.length) {
      document.getElementById('allChose').checked = true
    } else {
      document.getElementById('allChose').checked = false
    }
  }
  
  function findBtnFun() {
    var find = document.getElementById('inputN').value
  
    var tbody = document.getElementById('tbody')
  
    var str = ''
    if (find == '' || find == null) {
      showTable()
      return
    }
    tbody.innerHTML = ''
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].state == '删除') {
        continue
      }
      if (userarr[i].username.includes(find)) {
        console.log(userarr[i].username)
  
        str += '<tr>'
        str +=
          "<td> <input type='checkbox' value='" +
          userarr[i].username +
          "' name='user'  onclick='oneChose()' >  </td>"
        str += '<td>' + userarr[i].username + '</td>'
        str += '<td>' + userarr[i].acc + '</td>'
        str += '<td>' + userarr[i].sex + '</td>'
        str += '<td>' + userarr[i].state + '</td>'
        str +=
          '<td><input  class="btnG"  type="button" value="' +
          (userarr[i].state == '上架' ? '下架' : '上架') +
          '"  onclick=' +
          'stateHandle("' +
          userarr[i].acc +
          '")' +
          '><input  class="btnG"  type="button" value=" 修改"  onclick=' +
          'updateDataFun("' +
          userarr[i].acc +
          '")' +
          '><input  class="btnG"  type="button" value=" 删除"  onclick=' +
          'delDataFun("' +
          userarr[i].acc +
          '")' +
          '></td>'
  
        str += '</tr>'
      }
    }
    tbody.innerHTML = str
  }
  
  