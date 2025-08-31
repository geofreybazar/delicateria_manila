"use client";

import React, { useState } from "react";
import {
  MdExpandMore,
  MdChevronRight,
  MdEmail,
  MdPhone,
  MdSecurity,
  MdVisibility,
  MdEdit,
  MdDelete,
  MdDownload,
  MdShield,
  MdWarning,
} from "react-icons/md";

// Type definitions
interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}

interface RetentionDataRow {
  type: string;
  period: string;
}

interface AccordionSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

interface UsageItem {
  title: string;
  desc: string;
}

interface LegalBasisItem {
  title: string;
  desc: string;
}

interface ServiceProviderChip {
  label: string;
  colorClass: string;
}

interface UserRight {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
  descColor: string;
}

// Main component
const PrivacyPolicy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    intro: true,
  });

  const toggleSection = (sectionId: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const IconCard: React.FC<IconCardProps> = ({
    icon: Icon,
    title,
    description,
    color = "blue",
  }) => {
    const getColorClasses = (colorName: string) => {
      const colorMap: Record<string, { bg: string; text: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-600" },
        green: { bg: "bg-green-50", text: "text-green-600" },
        purple: { bg: "bg-purple-50", text: "text-purple-600" },
        orange: { bg: "bg-orange-50", text: "text-orange-600" },
        red: { bg: "bg-red-50", text: "text-red-600" },
      };
      return colorMap[colorName] || colorMap.blue;
    };

    const colorClasses = getColorClasses(color);

    return (
      <div className='h-full bg-white rounded-lg shadow-sm border border-gray-200'>
        <div className='p-4'>
          <div className='flex items-start space-x-3'>
            <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
              <Icon className={`h-6 w-6 ${colorClasses.text}`} />
            </div>
            <div className='flex-1'>
              <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                {title}
              </h4>
              <p className='text-sm text-gray-600'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AccordionSection: React.FC<AccordionSectionProps> = ({
    id,
    title,
    children,
    isExpanded,
    onToggle,
  }) => (
    <div className='border border-gray-200 rounded-lg mb-4 overflow-hidden'>
      <button
        onClick={onToggle}
        className='w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors'
        aria-expanded={isExpanded}
        aria-controls={`${id}-content`}
      >
        <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
        {isExpanded ? (
          <MdExpandMore className='h-5 w-5 text-gray-600 transform rotate-180' />
        ) : (
          <MdChevronRight className='h-5 w-5 text-gray-600' />
        )}
      </button>
      {isExpanded && (
        <div id={`${id}-content`} className='px-6 py-4 bg-white'>
          {children}
        </div>
      )}
    </div>
  );

  const Alert: React.FC<{
    type: "warning" | "info" | "error";
    title: string;
    children: React.ReactNode;
    className?: string;
  }> = ({ type, title, children, className = "" }) => {
    const alertClasses = {
      warning: "bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800",
      info: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
      error: "bg-red-50 border-l-4 border-red-400 text-red-800",
    };

    return (
      <div className={`p-4 ${alertClasses[type]} ${className}`}>
        <div className='flex'>
          <MdWarning className='h-5 w-5 mr-2 mt-0.5' />
          <div>
            <h4 className='font-semibold mb-1'>{title}</h4>
            <div className='text-sm'>{children}</div>
          </div>
        </div>
      </div>
    );
  };

  const Chip: React.FC<{
    label: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning";
    className?: string;
  }> = ({ label, color = "default", className = "" }) => {
    const chipClasses = {
      default: "bg-gray-100 text-gray-800 border-gray-300",
      primary: "bg-blue-100 text-blue-800 border-blue-300",
      secondary: "bg-purple-100 text-purple-800 border-purple-300",
      success: "bg-green-100 text-green-800 border-green-300",
      warning: "bg-orange-100 text-orange-800 border-orange-300",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${chipClasses[color]} ${className}`}
      >
        {label}
      </span>
    );
  };

  // Data arrays
  const retentionData: RetentionDataRow[] = [
    { type: "Account Data", period: "As long as account remains active" },
    {
      type: "Transaction Records",
      period: "7 years for tax and legal compliance",
    },
    { type: "Marketing Data", period: "Until consent is withdrawn" },
    { type: "Support Tickets", period: "3 years after resolution" },
  ];

  const personalInfoItems: string[] = [
    "Account Information",
    "Profile Information",
    "Delivery Information",
    "Payment Information",
    "Communication Data",
  ];

  const automaticInfoItems: string[] = [
    "Device Information",
    "Usage Data",
    "Location Data",
    "Cookies & Analytics",
  ];

  const primaryPurposes: UsageItem[] = [
    {
      title: "Order Processing",
      desc: "Managing purchases, payments, and deliveries",
    },
    {
      title: "Account Management",
      desc: "Maintaining accounts and providing customer support",
    },
    {
      title: "Communication",
      desc: "Sending order updates and customer service responses",
    },
  ];

  const secondaryPurposes: UsageItem[] = [
    {
      title: "Marketing",
      desc: "Promotional emails and personalized recommendations",
    },
    { title: "Analytics", desc: "Understanding user behavior and preferences" },
    {
      title: "Personalization",
      desc: "Customizing content and product suggestions",
    },
  ];

  const legalBasisItems: LegalBasisItem[] = [
    {
      title: "Contract Performance",
      desc: "To fulfill our Terms of Service obligations",
    },
    {
      title: "Legitimate Interests",
      desc: "To improve services and prevent fraud",
    },
    { title: "Consent", desc: "For marketing and optional features" },
    { title: "Legal Compliance", desc: "To comply with applicable laws" },
  ];

  const serviceProviders: ServiceProviderChip[] = [
    { label: "Payment Processors", colorClass: "bg-blue-100 text-blue-800" },
    { label: "Delivery Partners", colorClass: "bg-green-100 text-green-800" },
    { label: "Cloud Services", colorClass: "bg-purple-100 text-purple-800" },
    {
      label: "Analytics Providers",
      colorClass: "bg-orange-100 text-orange-800",
    },
  ];

  const technicalMeasures: string[] = [
    "SSL/TLS encryption for data transmission",
    "Restricted access on a need-to-know basis",
    "Regular security assessments and testing",
    "Secure data storage and backup systems",
  ];

  const organizationalMeasures: string[] = [
    "Staff training on data protection practices",
    "Incident response procedures",
    "Regular policy reviews and updates",
    "Vendor security assessments",
  ];

  const userRights: UserRight[] = [
    {
      icon: MdDownload,
      title: "Access & Portability",
      desc: "Request copies of your data in machine-readable format",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
      iconColor: "text-blue-600",
      descColor: "text-blue-800",
    },
    {
      icon: MdEdit,
      title: "Correction & Update",
      desc: "Correct inaccurate information and update personal details",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-900",
      iconColor: "text-green-600",
      descColor: "text-green-800",
    },
    {
      icon: MdDelete,
      title: "Erasure & Objection",
      desc: "Request deletion of your data and object to direct marketing",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-900",
      iconColor: "text-red-600",
      descColor: "text-red-800",
    },
    {
      icon: MdSecurity,
      title: "Restriction & Withdrawal",
      desc: "Restrict certain processing and withdraw consent anytime",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-900",
      iconColor: "text-purple-600",
      descColor: "text-purple-800",
    },
  ];

  const currentDate: string = new Date().toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 py-12'>
          <div className='flex items-center space-x-3 mb-4'>
            <MdShield className='h-8 w-8' />
            <h1 className='text-3xl font-bold'>Data Privacy Policy</h1>
          </div>
          <p className='text-blue-100 text-lg mb-6'>
            Delicateria Manila - Your privacy is our priority
          </p>

          <div className='bg-blue-700 bg-opacity-50 rounded-lg p-4'>
            <p className='text-sm text-blue-100'>
              <strong>Last Updated:</strong> {currentDate}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 py-8'>
        {/* Quick Summary */}
        <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Privacy at a Glance
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <IconCard
              icon={MdSecurity}
              title='We Protect Your Data'
              description='Your personal information is secured with industry-standard encryption and security measures.'
              color='blue'
            />
            <IconCard
              icon={MdVisibility}
              title='Transparent Practices'
              description='We clearly explain what data we collect, how we use it, and who we share it with.'
              color='green'
            />
            <IconCard
              icon={MdEdit}
              title='You Have Control'
              description='Update, access, or delete your personal information anytime through your account settings.'
              color='purple'
            />
            <IconCard
              icon={MdDownload}
              title='Data Portability'
              description='Request a copy of your data in a common, machine-readable format whenever you need it.'
              color='orange'
            />
          </div>
        </div>

        {/* Expandable Sections */}
        <div className='bg-white rounded-lg shadow-sm'>
          <AccordionSection
            id='intro'
            title='1. Introduction'
            isExpanded={expandedSections.intro || false}
            onToggle={() => toggleSection("intro")}
          >
            <p className='text-gray-700 leading-relaxed mb-4'>
              Delicateria Manila is committed to protecting your privacy and
              personal data. This Privacy Policy explains how we collect, use,
              process, and safeguard your personal information when you use our
              e-commerce platform and services.
            </p>

            <Alert type='warning' title='Legal Compliance' className='mt-4'>
              This policy complies with the Data Privacy Act of 2012 (Republic
              Act No. 10173) of the Philippines and other applicable privacy
              laws.
            </Alert>
          </AccordionSection>

          <AccordionSection
            id='collection'
            title='2. Information We Collect'
            isExpanded={expandedSections.collection || false}
            onToggle={() => toggleSection("collection")}
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='text-lg font-semibold mb-3'>
                  Personal Information You Provide
                </h4>
                <div className='space-y-2 mb-3'>
                  {personalInfoItems.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      color='default'
                      className='mr-2 mb-2'
                    />
                  ))}
                </div>
                <p className='text-sm text-gray-600'>
                  This includes names, email addresses, phone numbers,
                  addresses, and payment details.
                </p>
              </div>

              <div>
                <h4 className='text-lg font-semibold mb-3'>
                  Information Automatically Collected
                </h4>
                <div className='space-y-2 mb-3'>
                  {automaticInfoItems.map((item, index) => (
                    <Chip
                      key={index}
                      label={item}
                      color='secondary'
                      className='mr-2 mb-2'
                    />
                  ))}
                </div>
                <p className='text-sm text-gray-600'>
                  This includes IP addresses, browser information, page visits,
                  and interaction patterns.
                </p>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            id='usage'
            title='3. How We Use Your Information'
            isExpanded={expandedSections.usage || false}
            onToggle={() => toggleSection("usage")}
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='border border-gray-200 rounded-lg p-4 h-full'>
                <h4 className='text-lg font-semibold mb-3 text-blue-600'>
                  Primary Purposes
                </h4>
                <div className='space-y-3'>
                  {primaryPurposes.map((item, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                      <div>
                        <p className='font-medium'>{item.title}</p>
                        <p className='text-sm text-gray-600'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='border border-gray-200 rounded-lg p-4 h-full'>
                <h4 className='text-lg font-semibold mb-3 text-green-600'>
                  Secondary Purposes (with consent)
                </h4>
                <div className='space-y-3'>
                  {secondaryPurposes.map((item, index) => (
                    <div key={index} className='flex items-start space-x-3'>
                      <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                      <div>
                        <p className='font-medium'>{item.title}</p>
                        <p className='text-sm text-gray-600'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            id='legal-basis'
            title='4. Legal Basis for Processing'
            isExpanded={expandedSections["legal-basis"] || false}
            onToggle={() => toggleSection("legal-basis")}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
              {legalBasisItems.map((item, index) => (
                <div
                  key={index}
                  className='border border-gray-200 rounded-lg p-4 text-center h-full'
                >
                  <h5 className='font-semibold mb-2'>{item.title}</h5>
                  <p className='text-sm text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            id='sharing'
            title='5. Data Sharing and Disclosure'
            isExpanded={expandedSections.sharing || false}
            onToggle={() => toggleSection("sharing")}
          >
            <div className='space-y-4'>
              <div className='border border-gray-200 rounded-lg p-4 bg-gray-50'>
                <h4 className='font-semibold mb-2'>Service Providers</h4>
                <p className='text-sm text-gray-700 mb-3'>
                  We share data with trusted third parties who help us operate
                  our business:
                </p>
                <div className='flex flex-wrap gap-2'>
                  {serviceProviders.map((provider, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${provider.colorClass}`}
                    >
                      {provider.label}
                    </span>
                  ))}
                </div>
              </div>

              <Alert type='error' title='Legal Requirements'>
                We may disclose your information when required by valid legal
                process, government requests, or to protect our rights and
                prevent illegal activities.
              </Alert>
            </div>
          </AccordionSection>

          <AccordionSection
            id='security'
            title='6. Data Security'
            isExpanded={expandedSections.security || false}
            onToggle={() => toggleSection("security")}
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold mb-3'>Technical Measures</h4>
                <div className='space-y-2 text-gray-700'>
                  {technicalMeasures.map((measure, index) => (
                    <p key={index} className='text-sm'>
                      • {measure}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-3'>Organizational Measures</h4>
                <div className='space-y-2 text-gray-700'>
                  {organizationalMeasures.map((measure, index) => (
                    <p key={index} className='text-sm'>
                      • {measure}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            id='retention'
            title='7. Data Retention'
            isExpanded={expandedSections.retention || false}
            onToggle={() => toggleSection("retention")}
          >
            <div className='overflow-x-auto'>
              <table className='min-w-full bg-white border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Data Type
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {retentionData.map((row, index) => (
                    <tr key={index}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {row.type}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>
                        {row.period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='text-sm text-gray-600 mt-3'>
              Data is securely deleted or anonymized when no longer needed for
              the specified purposes.
            </p>
          </AccordionSection>

          <AccordionSection
            id='rights'
            title='8. Your Rights Under the Data Privacy Act'
            isExpanded={expandedSections.rights || false}
            onToggle={() => toggleSection("rights")}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {userRights.map((right, index) => (
                <div
                  key={index}
                  className={`${right.bgColor} ${right.borderColor} border rounded-lg p-4 h-full`}
                >
                  <div className='flex items-center mb-2'>
                    <right.icon className={`h-5 w-5 ${right.iconColor} mr-2`} />
                    <h5 className={`font-semibold ${right.textColor}`}>
                      {right.title}
                    </h5>
                  </div>
                  <p className={`text-sm ${right.descColor}`}>{right.desc}</p>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            id='contact'
            title='13. Contact Information'
            isExpanded={expandedSections.contact || false}
            onToggle={() => toggleSection("contact")}
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <h4 className='font-semibold mb-3'>Data Protection Officer</h4>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <MdEmail className='h-5 w-5 text-gray-600' />
                    <span className='text-sm text-blue-600'>
                      geofreybazar@gmail.com
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <MdPhone className='h-5 w-5 text-gray-600' />
                    <span className='text-sm text-gray-700'>+639157892889</span>
                  </div>
                </div>
              </div>

              <div className='border border-gray-200 rounded-lg p-4'>
                <h4 className='font-semibold mb-3'>
                  National Privacy Commission
                </h4>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <MdEmail className='h-5 w-5 text-gray-600' />
                    <span className='text-sm text-blue-600'>
                      complaints@privacy.gov.ph
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <MdPhone className='h-5 w-5 text-gray-600' />
                    <span className='text-sm text-gray-700'>
                      +63 970 818 0555 (Smart)
                    </span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <span className='text-sm text-blue-600'>
                      https://privacy.gov.ph/
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            id='consent'
            title='15. Consent'
            isExpanded={expandedSections.consent || false}
            onToggle={() => toggleSection("consent")}
          >
            <Alert type='info' title='Your Consent' className='mb-4'>
              By using Delicateria Manila{"'"}s services, you acknowledge that
              you have read, understood, and agree to this Privacy Policy. For
              marketing communications and optional features, we will seek your
              explicit consent through opt-in mechanisms.
            </Alert>
            <p className='text-sm text-gray-600 italic'>
              This Privacy Policy is governed by the laws of the Republic of the
              Philippines.
            </p>
          </AccordionSection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
