import React from 'react';
import { db } from './../../../../utils/index';
import { Ideas } from '../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { upvote, downvote, checkIsAlreadyUpVoted, checkIsAlreadyDownVoted } from '../../../Service'; 
import Linkify from 'linkify-react';
function IdeaItem({ idea, index, refreshData }) {
    const linkifyOptions = {
        attributes: {
            target: '_blank'
        }
    };
    const upVoteHandler = async () => {
        try {
            if (upvote(idea.id)) {
                const result = await db.update(Ideas)
                    .set({
                        vote: idea.vote + 1
                    })
                    .where(eq(Ideas.id, idea.id))
                    .returning({ id: Ideas.id });

                if (result) {
                    refreshData(); 
                }
            }
        } catch (error) {
            console.error('Error upvoting idea:', error);
      
        }
    };

    const downVoteHandler = async () => {
        try {
            if (downvote(idea.id)) {
                const result = await db.update(Ideas)
                    .set({
                        vote: idea.vote - 1
                    })
                    .where(eq(Ideas.id, idea.id))
                    .returning({ id: Ideas.id });

                if (result) {
                    refreshData(); 
                }
            }
        } catch (error) {
            console.error('Error downvoting idea:', error);
          
        }
    };

    return (
        <div className='my-5 border shadow-lg rounded-2xl gap-7 p-5'>
            <div className='flex justify-between'>
                <h2 className='gap-2'><span>{index + 1}. </span><Linkify options={linkifyOptions}>{idea?.content}</Linkify></h2>
                <div className='flex flex-col items-center'>
                    <h2 className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${checkIsAlreadyUpVoted(idea.id)&&'bg-slate-200'}`} onClick={upVoteHandler}>🫡</h2>
                    <h2 className='text-lg rounded-md p-1 font-bold'>{idea.vote}</h2>
                    <h2 className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${checkIsAlreadyDownVoted(idea.id)&&'bg-slate-200'}`} onClick={downVoteHandler}>🤮</h2>
                </div>
            </div>
            <h2 className='mt-4 text-gray-400 text-sm flex gap-5'>
                By @{idea.username} on {idea.createdAt}</h2>
        </div>
    );
}

export default IdeaItem;
