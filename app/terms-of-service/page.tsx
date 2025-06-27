import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 px-4 bg-slate-50">
        <div className="nyt-container max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
            服务条款
          </h1>
          <p className="text-slate-600 leading-relaxed">
            欢迎来到 MiniGameHub！这些服务条款（"条款"）管辖您对 minigamehub.com 网站（"网站"）的使用。通过访问或使用网站，即表示您同意遵守本条款。
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              接受条款
            </h2>
            <p className="text-slate-600 leading-relaxed">
              通过访问和使用网站，您承认已阅读、理解并同意受本条款以及我们隐私政策的约束。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              网站的使用
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>您必须年满 13 岁才能使用本网站。</li>
              <li>您同意仅将本网站用于合法目的，并遵守所有适用的法律法规。</li>
              <li>您不得以任何可能损害、禁用、负担或损害网站的方式使用网站，或干扰任何其他方对网站的使用和享受。</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              知识产权
            </h2>
            <p className="text-slate-600 leading-relaxed">
              网站及其所有原始内容、功能和特性（包括但不限于所有信息、软件、文本、显示、图像、视频和音频，以及其设计、选择和排列）均归 MiniGameHub 及其许可方所有，并受版权、商标、专利、商业秘密和其他知识产权或专有权利法律的保护。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              免责声明
            </h2>
            <p className="text-slate-600 leading-relaxed">
              本网站按"原样"和"可用"提供，不提供任何形式的明示或暗示保证。MiniGameHub 不保证网站将不受干扰、及时、安全或无错误。您自行承担使用网站的风险。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              责任限制
            </h2>
            <p className="text-slate-600 leading-relaxed">
              在任何情况下，MiniGameHub 及其董事、员工、合作伙伴、代理、供应商或关联公司均不对任何间接、偶然、特殊、后果性或惩罚性损害负责，包括但不限于利润、数据、使用、商誉或其他无形损失的损失，这些损失是由于 (i) 您访问或使用或无法访问或使用网站；(ii) 网站上任何第三方的任何行为或内容；(iii) 从网站获得的任何内容；以及 (iv) 无论是基于保修、合同、侵权（包括疏忽）还是任何其他法律理论，即使我们已被告知发生此类损害的可能性。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              变更
            </h2>
            <p className="text-slate-600 leading-relaxed">
              我们保留随时修改或替换这些条款的权利，由我们自行决定。如果修订是实质性的，我们将在新条款生效前至少提前 30 天发出通知。构成实质性变更的因素将由我们自行决定。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: 'Noto Serif, Georgia, serif' }}>
              联系我们
            </h2>
            <p className="text-slate-600 leading-relaxed">
              如果您对这些条款有任何疑问，请通过电子邮件联系我们：[您的邮箱地址，例如 support@minigamehub.com]。
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
} 