const translations = {
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    experience: "Trải nghiệm",
    homestay: "Homestay",
    contact: "Liên hệ",
    welcome: "Chào mừng đến với Du lịch cộng đồng Bản Bon",
    slogan: "Khám phá – Trải nghiệm – Gắn kết",
    about_title: "Giới thiệu",
    about_text: "Bản Bon, xã Mường Chiên, Sơn La nổi bật với hồ thủy điện, suối khoáng nóng và văn hóa Thái đặc sắc.",
    experience_title: "Trải nghiệm nổi bật",
    exp1: "Tắm suối khoáng nóng",
    exp2: "Đi thuyền trên hồ thủy điện",
    exp3: "Tham gia lễ hội múa xòe, uống rượu cần",
    homestay_title: "Homestay & Ẩm thực",
    homestay_text: "Các homestay truyền thống với ẩm thực địa phương: cá nướng, xôi ngũ sắc, thịt trâu gác bếp...",
    contact_title: "Liên hệ"
  },
  en: {
    home: "Home",
    about: "About",
    experience: "Experience",
    homestay: "Homestay",
    contact: "Contact",
    welcome: "Welcome to Ban Bon Community Tourism",
    slogan: "Discover – Experience – Connect",
    about_title: "About",
    about_text: "Ban Bon, Muong Chien, Son La is famous for its hydro lake, hot springs and unique Thai culture.",
    experience_title: "Highlights",
    exp1: "Relax in natural hot springs",
    exp2: "Boat tour on hydro lake",
    exp3: "Join Thai festival, Xoe dance, drink Ruou Can",
    homestay_title: "Homestay & Cuisine",
    homestay_text: "Traditional homestays with local cuisine: grilled fish, five-color sticky rice, buffalo jerky...",
    contact_title: "Contact"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}