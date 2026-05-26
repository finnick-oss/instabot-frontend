import axios from 'axios'

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const api = {
  async fetchPosts() {
    try {
      const res = await axios.get(`${BASE}/api/posts`, { timeout: 10000 })
      return res.data?.posts || []
    } catch (err) {
      const msg = err.response?.data?.error || err.message
      console.warn('fetchPosts failed:', msg)
      return []
    }
  },

  async fetchStats() {
    try {
      const res = await axios.get(`${BASE}/api/stats`)
      return res.data
    } catch {
      return { comments_replied: 0, dms_sent: 0, clicks: 0, followers_gained: 0, emails_saved: 0 }
    }
  },

  async fetchConfig() {
    try {
      const res = await axios.get(`${BASE}/api/config`)
      return res.data
    } catch {
      return null
    }
  },

  async saveConfig(config) {
    try {
      const res = await axios.post(`${BASE}/api/config`, config, { timeout: 15000 })
      return { success: true, data: res.data }
    } catch (e) {
      return { success: false, error: e.message }
    }
  },

  async syncPosts() {
    try {
      const res = await axios.post(`${BASE}/api/sync`, {}, { timeout: 15000 })
      return res.data
    } catch (e) {
      return { success: false, error: e.message }
    }
  },

  async checkHealth() {
    try {
      const res = await axios.get(`${BASE}/api/health`, { timeout: 3000 })
      return res.data
    } catch {
      return { ok: false }
    }
  }
}
