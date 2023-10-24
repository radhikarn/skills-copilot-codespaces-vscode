function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberData = {
        value: memberValue,
        text: memberText
    };
    return memberData;
}
