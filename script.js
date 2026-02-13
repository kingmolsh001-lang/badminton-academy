function showBrand(brand) {
    let info = "";
    let image = "";

    if (brand === "yonex") {
        info = `
        <h2>Yonex</h2>
        <ul>
            <li>Power Cushion ลดแรงกระแทก</li>
            <li>น้ำหนักเบา เหมาะกับเกมเร็ว</li>
            <li>นิยมใช้ในการแข่งขัน</li>
        </ul>`;
        image = "https://i.pinimg.com/736x/27/c8/f1/27c8f1c330e138cd361480b69eb2caf2.jpg";
    }

    if (brand === "victor") {
        info = `
        <h2>Victor</h2>
        <ul>
            <li>โครงสร้างแข็งแรง</li>
            <li>รองรับแรงบิดข้อเท้า</li>
            <li>เหมาะกับผู้เล่นสายพลัง</li>
        </ul>`;
        image = "https://i.pinimg.com/1200x/2f/0e/ba/2f0eba9e61f1df542dd235bc9b5342cf.jpg";
    }

    if (brand === "lining") {
        info = `
        <h2>Li-Ning</h2>
        <ul>
            <li>Cloud Cushion นุ่ม</li>
            <li>ดีไซน์สวย</li>
            <li>คุ้มค่าราคา</li>
        </ul>`;
        image = "https://i.pinimg.com/736x/f5/21/08/f5210883261dd79dcdf8cfa0108075ce.jpg";
    }

    if (brand === "mizuno") {
        info = `
        <h2>Mizuno</h2>
        <ul>
            <li>งานประกอบคุณภาพสูง</li>
            <li>พื้นรองเท้านุ่ม</li>
            <li>เหมาะกับการซ้อมระยะยาว</li>
        </ul>`;
        image = "https://i.pinimg.com/1200x/c1/6c/cf/c16ccf59cbb7d3c7043ccaaf2b54f288.jpg";
    }

    document.getElementById("brand-info").innerHTML = info;
    document.getElementById("brandImage").src = image;
}
