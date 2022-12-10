import React from 'react';

import Alert from './';

export default {
  title: 'Alert',
  component: Alert,
};

export const Basic = (args) => (
  <Alert
    variant="warning"
    title="Attention needed"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
  />
);
Basic.args = {};

export const Bullet = (args) => (
  <Alert
    variant="error"
    title="There were 2 errors with your submission"
    description={
      <ul className="list-disc space-y-1 pl-5">
        <li>Your password must be at least 8 characters</li>
        <li>Your password must include at least one pro wrestling finishing move</li>
      </ul>
    }
  />
);

export const Action = (args) => (
  <Alert
    variant="success"
    title="Order completed"
    description={
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique
        veniam.
        <div className="mt-4">
          <div className="-mx-2 -my-1.5 flex">
            <button
              type="button"
              className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              View status
            </button>
            <button
              type="button"
              className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              Dismiss
            </button>
          </div>
        </div>
      </>
    }
  />
);

export const ExtraAction = (args) => (
  <Alert
    variant="info"
    description="A new software update is available. See what’s new in version 2.0.4."
    extraAction={
      <p className="mt-3 text-sm md:mt-0 md:ml-6">
        <a href="/" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
          Details <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    }
  />
);

export const WithAccent = (args) => (
  <Alert
    withAccentBorder
    variant="warning"
    description={
      <>
        You have no credits left.{' '}
        <a href="/" className="font-medium text-yellow-700 underline hover:text-yellow-600">
          Upgrade your account to add more credits.
        </a>
      </>
    }
  />
);

export const OnClose = (args) => (
  <Alert variant="success" title="Successfully uploaded" onClose={() => {}} />
);
