// 获取按钮和表单元素
const ctaButton = document.getElementById('ctaButton');
const contactForm = document.getElementById('contactForm');

// 主按钮点击事件
ctaButton.addEventListener('click', () => {
    alert('感谢您的关注！我们的团队将尽快联系您。');
    document.querySelector('.contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// 表单提交事件
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    
    // 模拟表单提交
    alert(`谢谢 ${name}！我们将通过 ${email} 联系您。`);
    
    // 重置表单
    contactForm.reset();
});

// 导航滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.position = 'static';
        nav.style.boxShadow = 'none';
    }
});