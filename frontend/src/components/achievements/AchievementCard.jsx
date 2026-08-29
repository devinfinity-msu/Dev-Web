import React from 'react';

import {
  Trophy,
  Calendar,
  Users,
  Sparkles
} from 'lucide-react';

import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AchievementCard = ({ achievement }) => {
  const isClub = achievement.type.includes('Club');

  return (
    <Card
      hover
      className={`achievement-card ${
        isClub
          ? 'achievement-card-club'
          : 'achievement-card-member'
      }`}
    >
      {/* Image */}
      <div className="achievement-card-image">
        <img
          src={achievement.image}
          alt={achievement.title}
        />

        <div className="achievement-image-overlay" />

        {/* Achievement type */}
        <div className="achievement-card-badge">
          <Badge variant={isClub ? 'success' : 'accent'}>
            <Trophy size={12} />
            <span>{achievement.type}</span>
          </Badge>
        </div>

        {/* Floating sparkle */}
        <div className="achievement-sparkle">
          <Sparkles size={15} />
        </div>
      </div>

      {/* Content */}
      <div className="achievement-card-content">

        <div className="achievement-card-topline">
          <span>
            {isClub
              ? 'CLUB ACHIEVEMENT'
              : 'MEMBER ACHIEVEMENT'}
          </span>

          <span className="achievement-card-year">
            {achievement.date}
          </span>
        </div>

        <h3>
          {achievement.title}
        </h3>

        <p>
          {achievement.description}
        </p>

        {/* Metadata */}
        <div className="achievement-card-meta">

          <div className="achievement-meta-item">
            <Users size={15} />
            <span>
              {achievement.members}
            </span>
          </div>

          <div className="achievement-meta-item">
            <Calendar size={15} />
            <span>
              {achievement.date}
            </span>
          </div>

        </div>

      </div>

      {/* Bottom glow */}
      <div className="achievement-card-glow" />
    </Card>
  );
};

export default AchievementCard;