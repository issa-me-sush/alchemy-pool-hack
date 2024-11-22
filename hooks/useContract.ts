import { ethers } from 'ethers'
import { ABI, CONTRACT_ADDRESS } from '../contract/abi.js'
import { useState, useEffect } from 'react'

export function useContract() {
  const [reputationData, setReputationData] = useState({ upvotes: 0, downvotes: 0 })

  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer)
  }

  const getReputationScore = async (address: string) => {
    try {
      const contract = getContract()
      const [upvotes, downvotes] = await contract.getReputation(address)
      return {
        upvotes: Number(upvotes),
        downvotes: Number(downvotes)
      }
    } catch (error) {
      console.error('Failed to get reputation:', error)
      return { upvotes: 0, downvotes: 0 }
    }
  }

  // Helper functions
  const handleUpvote = async (address: string) => {
    try {
      const contract = getContract()
      await contract.upvote(address)
    } catch (error) {
      console.error('Upvote failed:', error)
      throw error
    }
  }

  const handleDownvote = async (address: string) => {
    try {
      const contract = getContract()
      await contract.downvote(address)
    } catch (error) {
      console.error('Downvote failed:', error)
      throw error
    }
  }

  const handleClaimRewards = async () => {
    try {
      const contract = getContract()
      await contract.claimRewards()
    } catch (error) {
      console.error('Claim failed:', error)
      throw error
    }
  }

  return {
    handleUpvote,
    handleDownvote,
    handleClaimRewards,
    getReputationScore,
    getContract,
  }
}
