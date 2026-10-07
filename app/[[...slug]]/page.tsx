import Workspace from '@/components/workspace';
import { Suspense } from 'react';
export default function Page() { return <Suspense fallback={<div className="loading-screen"><span>✳</span><div/></div>}><Workspace /></Suspense>; }
