
Page({
  data: {
    subMenuDisplay: initSubMenuDisplay()
  },
  tapMainMenu: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var newSubMenuDisplay = initSubMenuDisplay();
    if (this.data.subMenuDisplay[index] == 'hidden') {
      newSubMenuDisplay[index] = 'show';
    } else {
      newSubMenuDisplay[index] = 'hidden';
    }
    this.setData({
      subMenuDisplay: newSubMenuDisplay
    });
  },
  tapSubMenu: function (e) {
    this.setData({
      subMenuDisplay: initSubMenuDisplay()
    });
    var indexArray = e.currentTarget.dataset.index.split('-');
    for (var i = 0; i < initSubMenuHighLight.length; i++) {
      if (indexArray[0] == i) {
        for (var j = 0; j < initSubMenuHighLight[i].length; j++) {
          initSubMenuHighLight[i][j] = '';
        }
      }
    }
    initSubMenuHighLight[indexArray[0]][indexArray[1]] = 'highlight';
    this.setData({
      subMenuHighLight: initSubMenuHighLight
    });
  }
});

function initSubMenuDisplay() {
  return ['hidden', 'hidden'];
}
var initSubMenuHighLight = [
  ['', '', '']
  ['', '', '','','']
];
