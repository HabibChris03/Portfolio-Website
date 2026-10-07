import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Seo } from '../components/ui/Seo';
import { useLanguage } from '../context/LanguageContext';
import { skillGroups } from '../data/skills';

export function SkillsPage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <Seo title={t('nav.skills')} description={t('skills.intro')} />
      <section className="section">
        <SectionHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} intro={t('skills.intro')} />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.id} className="card skills-group">
              <h3>{t(group.labelKey)}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="chip chip--muted">{t(skill.levelKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
