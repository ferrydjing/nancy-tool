<template>
  <el-form ref="form" label-width="200px" :model="formData" :rules="cRules" @submit.native.prevent>
    <h2>Nancy Tools modified v2.1</h2>
    <el-form-item label="Age" prop="age">
      <el-input class="w360" v-model="formData.age" placeholder="input age"></el-input>
    </el-form-item>
    <el-form-item label="TRA Choose">
      <el-radio-group v-model="formData.choose" @change="chooseChange">
        <el-radio :label="1">Yes</el-radio>
        <el-radio :label="0">No</el-radio>
      </el-radio-group>
    </el-form-item>
    <template v-if="formData.choose === 1">
      <el-form-item label="TRA" prop="tra">
        <el-select class="w360" v-model="formData.tra">
          <el-option v-for="(item, index) in cTra" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <span class="after">TRA可选: {{ cTra }}</span>
      </el-form-item>
      <el-form-item label="TRP" prop="trp">
        <el-select class="w360" v-model="formData.trp">
          <el-option v-for="(item, index) in cTrp" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <span class="after">TRP可选: {{ cTrp }}</span>
      </el-form-item>
    </template>
    <template v-else>
      <el-form-item label="TRA" prop="tra">
        <el-select class="w360" v-model="formData.tra">
          <el-option v-for="(item, index) in cTra1" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <span class="after">TRA可选: {{ cTra1 }}</span>
      </el-form-item>
      <el-form-item label="TRP" prop="trp">
        <el-select class="w360" v-model="formData.trp">
          <el-option v-for="(item, index) in cTrp1" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <span class="after">TRP可选: {{ cTrp1 }}</span>
      </el-form-item>
    </template>

    <el-form-item label="Accum" prop="accum">
      <!-- accum -->
      <el-input v-model="formData.accum" class="w360"></el-input>
    </el-form-item>
    <el-form-item label="MIP" prop="mip">
      <el-select class="w360" v-model="formData.mip">
        <el-option v-for="(item, index) in cMip" :key="index" :label="item" :value="item"></el-option>
      </el-select>
      <span class="after">Mip可选: {{ cMip }}</span>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      formData: {
        age: '',
        tra: '',
        trp: '',
        choose: 1,
        accum: 5,
        mip: ''
      }
    }
  },
  computed: {
    cRules() {
      return {
        age: [
          {
            required: true,
            message: '必填'
          },
          {
            pattern: /^((1[8-9])|(2[0-9])|(3[0-9])|(4[0-9])|(5[0-9])|60)$/,
            message: '请输入18-60'
          }
        ],
        tra: [
          {
            required: true,
            message: '必选'
          }
        ],
        trp: [
          {
            required: true,
            message: '必选'
          }
        ],
        accum: [
          {
            required: true,
            message: '必填'
          },
          {
            pattern: /^\d{1,}$/,
            message: '请输入数字'
          },
          {
            validator: (rule, value, callback) => {
              if (this.formData.tra - this.formData.age) {
                if (+value < 5 || +value > (this.formData.tra - this.formData.age || 5)) {
                  callback(new Error(`5-${this.formData.tra - this.formData.age || 5}之前的数字`))
                }
              } else if (+value < 5 || +value > (this.formData.tra - this.formData.age || 5)) {
                callback(new Error(`请输入5`))
              } else {
                callback()
              }
            }
          }
        ],
        mip: [
          {
            required: true,
            message: '必选'
          }
        ]
      }
    },
    cTra() {
      if (+this.formData.age <= 30 && +this.formData.age >= 18) {
        return [40, 45, 50, 55, 60, 65, 70]
      } else if (+this.formData.age <= 35 && +this.formData.age >= 31) {
        return [45, 50, 55, 60, 65, 70]
      } else if (+this.formData.age <= 40 && +this.formData.age >= 36) {
        return [50, 55, 60, 65, 70]
      } else if (+this.formData.age <= 45 && +this.formData.age >= 41) {
        return [55, 60, 65, 70]
      } else if (+this.formData.age <= 50 && +this.formData.age >= 46) {
        return [60, 65, 70]
      } else if (+this.formData.age <= 55 && +this.formData.age >= 51) {
        return [65, 70]
      } else if (+this.formData.age <= 60 && +this.formData.age >= 56) {
        return [70]
      } else {
        return []
      }
    },
    cTra1() {
      if (this.formData.trp) {
        let arr = []
        if (+this.formData.age <= 30 && +this.formData.age >= 18) {
          arr = [40, 45, 50, 55, 60, 65, 70]
        } else if (+this.formData.age <= 35 && +this.formData.age >= 31) {
          arr = [45, 50, 55, 60, 65, 70]
        } else if (+this.formData.age <= 40 && +this.formData.age >= 36) {
          arr = [50, 55, 60, 65, 70]
        } else if (+this.formData.age <= 45 && +this.formData.age >= 41) {
          arr = [55, 60, 65, 70]
        } else if (+this.formData.age <= 50 && +this.formData.age >= 46) {
          arr = [60, 65, 70]
        } else if (+this.formData.age <= 55 && +this.formData.age >= 51) {
          arr = [65, 70]
        } else if (+this.formData.age <= 60 && +this.formData.age >= 56) {
          arr = [70]
        } else {
          arr = []
        }
        const val = 85 - this.formData.trp
        return arr.filter(item => item <= val)
      } else {
        return []
      }
    },
    cTrp() {
      if (this.formData.tra) {
        const val = 85 - this.formData.tra
        const arr = [10, 15, 20, 25, 30]

        return arr.filter(item => item <= val)
      } else {
        return []
      }
    },
    cTrp1() {
      if (this.formData.age) {
        if (+this.formData.age <= 45 && +this.formData.age >= 18) {
          return [10, 15, 20, 25, 30]
        } else if (+this.formData.age <= 50 && +this.formData.age >= 46) {
          return [10, 15, 20, 25]
        } else if (+this.formData.age <= 55 && +this.formData.age >= 51) {
          return [10, 15, 20]
        } else if (+this.formData.age <= 60 && +this.formData.age >= 56) {
          return [10, 15]
        } else {
          return []
        }
      } else {
        return []
      }
    },
    cMip() {
      const arr = [5, 8, 12, 16]
      const val = this.formData.tra - this.formData.age - this.formData.accum
      console.log(val, arr)
      return arr.filter(item => item <= val)
    }
  },
  watch: {
    'formData.age': function() {
      this.formData.tra = ''
      this.formData.trp = ''
      this.formData.mip = ''
      this.formData.accum = 5
    }
  },
  methods: {
    chooseChange() {
      this.formData.tra = ''
      this.formData.trp = ''
      this.formData.mip = ''
      this.formData.accum = 5
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  margin-top: 60px;
  padding: 0 20px;
  .after {
    margin-left: 20px;
  }
}
.w360 {
  width: 360px;
}
</style>
