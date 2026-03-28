// app/login/page.tsx
import React from 'react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[transparent]">
      <div className="container-centered login-layout">
        {/* LEFT: Hero/brand */}
        <section className="hero-right">
          {/* logo file expected at /public/images/nauss-logo-gold.png */}
          <img src="/images/nauss-logo-gold.png" alt="جامعة نايف" className="logo" />
          <h1 className="h1 mt-6">منصة تأمين المشاركين للدورات الخارجية</h1>
          <p className="p-muted mt-4">
            تجربة دخول متكاملة وسهلة للإدارات والجهات المتعاونة، مع واجهة متوافقة مع هوية الجامعة، ووحدة وصول إدارية واضحة.
          </p>
          <div className="mt-6">
            <span className="nauss-badge">NAUSS</span>
          </div>
        </section>

        {/* RIGHT: Login card */}
        <aside className="login-card">
          <h2 className="h2 mb-3">تسجيل الدخول</h2>
          <p className="p-muted mb-4">أدخل بيانات الحساب للوصول إلى لوحة العمل.</p>

          <label className="block text-right text-sm mb-1">البريد الإلكتروني</label>
          <input className="input mb-3" name="email" placeholder="name@nauss.edu.sa" />

          <label className="block text-right text-sm mb-1">كلمة المرور</label>
          <input type="password" className="input mb-4" name="password" />

          <button className="btn-primary" type="button">تسجيل الدخول</button>

          <div className="mt-4 text-right">
            <small className="p-muted">الوصول محمي ومخصّص للحسابات المعتمدة</small>
          </div>
        </aside>
      </div>
    </main>
  );
}