// รอให้หน้าเว็บโหลดเสร็จสมบูรณ์ก่อน
document.addEventListener('DOMContentLoaded', function() {
    console.log("เว็บไซต์โหลดเสร็จสมบูรณ์แล้ว!");

    // ตัวอย่างการทำ Smooth Scroll เมื่อคลิกปุ่ม "เริ่มต้นใช้งาน"
    const startBtn = document.querySelector('a[href="#services"]');
    
    if(startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault(); // ยกเลิกพฤติกรรมกระโดดแบบปกติ
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // สั่งให้เลื่อนหน้าจอไปยังเป้าหมายอย่างนุ่มนวล
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});