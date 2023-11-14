import React from 'react'

export default function Button({ onClick, text}) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="btn btn-outline"
      >
        {text}
      </button>
    );
  }
