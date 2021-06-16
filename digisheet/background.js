function genericOnClick(info, tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { text: "code-block" }, function (response) {
        console.log(response);
    });
  });
}
  
  chrome.contextMenus.create({
    "title": "Digisheet_Auto_Regist",
    "contexts": ["page"],
    "onclick": genericOnClick
  });