'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Shekhar_Dubey_Resume_2024.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
