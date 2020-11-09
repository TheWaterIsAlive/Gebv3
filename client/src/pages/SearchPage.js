import React from 'react';
import Wrapper from '../components/Wrapper';

export default function SearchPage() {
    return (
        <div >
         <Wrapper>
         </Wrapper>
         <form>
          <input type="text" id="search" name="search" placeholder="search..." />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>

         </form>
        </div>
      );

}