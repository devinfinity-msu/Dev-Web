
import React, { useState } from 'react';

import { PageContainer } from '../../components/layout/PageContainer';
import { AchievementFilters } from '../../components/achievements/AchievementFilters';
import { AchievementCard } from '../../components/achievements/AchievementCard';
import { AchievementBackground } from '../../components/achievements/AchievementBackground';
import { EmptyState } from '../../components/common/EmptyState';

import { achievements } from '../../data/mockData';

import '../../styles/achievements.css';

export const AchievementsPage = () => {
  const [filter, setFilter] = useState('All');

  /* =========================================================
     FILTER ACHIEVEMENTS
  ========================================================= */

  const filteredAchievements = achievements.filter(
    (achievement) => {
      if (filter === 'All') {
        return true;
      }

      return achievement.type.includes(filter);
    }
  );

  const achievementCount = filteredAchievements.length;

  return (
    <PageContainer>

      <main className="achievements-page">

        {/* =====================================================
            ANIMATED OCEAN BACKGROUND
        ===================================================== */}

        <AchievementBackground />


        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <div className="achievements-content">


          {/* ===================================================
              HERO
          =================================================== */}

          <section className="achievements-hero">

            <div className="achievement-eyebrow">

              <span className="eyebrow-dot" />

              OUR JOURNEY

              <span className="eyebrow-dot" />

            </div>


            <div className="hero-infinity-symbol">
              ∞
            </div>


            <div className="hero-script">
              Celebrating
            </div>


            <h1>
              What We Build
            </h1>


            <p className="hero-description">
              From ambitious ideas to unforgettable milestones,
              we celebrate the work, victories and contributions
              that continue to shape the Dev Infinity community.
            </p>


            <div className="achievement-hero-points">

              <span>
                Club Milestones
              </span>

              <i>
                ✦
              </i>

              <span>
                Member Achievements
              </span>

              <i>
                ✦
              </i>

              <span>
                Shared Success
              </span>

            </div>


            <div className="hero-decoration">

              <span />

              <div className="hero-diamond">
                ◇
              </div>

              <span />

            </div>

          </section>



          {/* ===================================================
              FILTERS
          =================================================== */}

          <section className="achievement-filter-section">

            <AchievementFilters
              activeFilter={filter}
              onFilterChange={setFilter}
            />

          </section>



          {/* ===================================================
              ACHIEVEMENT JOURNEY
          =================================================== */}

          <section className="achievement-journey">

            {achievementCount > 0 ? (

              <div
                className={`achievement-timeline achievement-count-${achievementCount}`}
              >
                {/* =================================================
                    ACHIEVEMENT CARDS
                ================================================= */}

                <div className="achievement-items">

                  {filteredAchievements.map(
                    (achievement, index) => (

                      <React.Fragment
                        key={achievement.id}
                      >

                        {/* =================================================
                            ACHIEVEMENT CARD
                        ================================================= */}

                        <div
                          className={`achievement-item achievement-item-${
                            index + 1
                          }`}
                        >

                          <AchievementCard
                            achievement={achievement}
                            index={index}
                          />

                        </div>
                      </React.Fragment>

                    )
                  )}

                </div>

              </div>

            ) : (

              /* =================================================
                 EMPTY STATE
              ================================================= */

              <div className="achievement-empty">

                <EmptyState
                  title="No Achievements Found"
                  description={`No achievements recorded under "${filter}".`}
                  actionText="Reset Filter"
                  onAction={() => setFilter('All')}
                />

              </div>

            )}

          </section>



          {/* ===================================================
              ENDING
          =================================================== */}

          <section className="achievement-ending">

            <div className="ending-symbol">
              ∞
            </div>


            <p>
              Every achievement is a step towards infinity.
            </p>


            <div className="ending-decoration">

              <span />

              <b>
                ◇
              </b>

              <span />

            </div>

          </section>

        </div>

      </main>

    </PageContainer>
  );
};


export default AchievementsPage;