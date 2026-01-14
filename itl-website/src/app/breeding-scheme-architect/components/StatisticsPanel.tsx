'use client';

/**
 * Statistics Panel - Display estimated breeding resources
 */

import { BreedingPlan } from './lib/types';
import { formatProbability } from './lib/breedingCalculations';
import { IconCalendar, IconMouse, IconUsers, IconBarChart, IconClock } from '@/components/UXUIDC/Icons';

interface StatisticsPanelProps {
  plan: BreedingPlan;
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: string;
}

function StatCard({ icon, label, value, color = '#008080' }: StatCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '.5px solid #e0e0e0',
        padding: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#0a253c',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: color,
            lineHeight: 1.2,
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontFamily: 'var(--system-ui)',
            fontSize: '.85rem',
            color: '#666',
            marginTop: '4px',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function StatisticsPanel({ plan }: StatisticsPanelProps) {
  return (
    <div
      style={{
        backgroundColor: '#f7f7f7',
        border: '.5px solid #e0e0e0',
        borderTop: '4px solid #008080',
        padding: '25px',
        marginTop: '30px',
      }}
    >
      <h3
        style={{
          color: '#333',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.1rem',
          fontWeight: 600,
          margin: 0,
          marginBottom: '20px',
        }}
      >
        Estimated Resources
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '15px',
          marginBottom: '20px',
        }}
      >
        <StatCard
          icon={<IconCalendar size={24} color="white" />}
          label="Generations to target genotype"
          value={plan.totalGenerations}
        />
        <StatCard
          icon={<IconUsers size={24} color="white" />}
          label="Estimated breeding pairs needed"
          value={plan.estimatedBreedingPairs}
          color="#134978"
        />
        <StatCard
          icon={<IconMouse size={24} color="white" />}
          label="Estimated total mice generated"
          value={plan.estimatedTotalMice}
        />
        <StatCard
          icon={<IconClock size={24} color="white" />}
          label="Estimated timeline (weeks)"
          value={plan.estimatedWeeks}
          color="#134978"
        />
        <StatCard
          icon={<IconBarChart size={24} color="white" />}
          label="Target genotype frequency"
          value={formatProbability(plan.targetGenotypeFrequency)}
        />
      </div>

      {/* Warnings */}
      {plan.warnings.length > 0 && (
        <div
          style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            padding: '15px 20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '.9rem',
              fontWeight: 600,
              color: '#856404',
              marginBottom: '8px',
            }}
          >
            Warnings
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: '20px',
              fontFamily: 'var(--system-ui)',
              fontSize: '.85rem',
              color: '#856404',
              lineHeight: '1.6',
            }}
          >
            {plan.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <div
        style={{
          fontFamily: 'var(--system-ui)',
          fontSize: '.8rem',
          color: '#999',
          lineHeight: '1.5',
          fontStyle: 'italic',
        }}
      >
        Estimates are based on standard C57BL/6 breeding parameters (average litter
        size 6 to 8 pups, 80% breeding efficiency). Actual results may vary based on
        strain background, allele effects on fertility, and environmental factors.
        Contact our scientific team for project-specific guidance.
      </div>
    </div>
  );
}
