import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <>
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal"> 이용약관 </p>
        <Link
          href="https://www.notion.so/25dced6af6528032bdb2fcfe1c775a61?source=copy_link"
          className="body2-m text-Label-Assistive"
        >
          자세히
        </Link>
      </div>
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal"> 체험 동의서 </p>
        <Link
          href="https://www.notion.so/25dced6af652804bbdebccd365c34a32?source=copy_link"
          className="body2-m text-Label-Assistive"
        >
          자세히
        </Link>
      </div>
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal">
          취소 수수료 및 패널티 안내
        </p>
        <Link
          href="https://www.notion.so/25dced6af652803b89a8fff37e2d2d20?source=copy_link"
          className="body2-m text-Label-Assistive"
        >
          자세히
        </Link>
      </div>
    </>
  );
}
