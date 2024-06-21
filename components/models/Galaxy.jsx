/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 galaxy.gltf 
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-a1b186830a37451aaccf0b80a9d4f107
Title: Galaxy
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/galaxy.gltf')
  const { actions } = useAnimations(animations, group)
  const radius = 5; // Radius of the circular path
  let angle = 0; // Initial angle

  useFrame(() => {
    angle += 0.001;
    group.current.position.x = radius * Math.cos(angle); // Update x position
    group.current.position.z = radius * Math.sin(angle); // Update z position
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Empty_1">
                  <group name="Cone_0" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} material-color={"blue"} />
                  </group>
                </group>
                <group name="Empty001_3">
                  <group name="Cone001_2">
                    <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty002_6">
                  <group name="Cone002_4" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone065_5" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty003_8">
                  <group name="Cone003_7" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty004_10" scale={1.821}>
                  <group name="Cone004_9" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty005_13" scale={1.821}>
                  <group name="Cone005_11" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone066_12" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty006_15" scale={1.821}>
                  <group name="Cone006_14" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty007_17" scale={1.821}>
                  <group name="Cone007_16" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty008_19" scale={1.423}>
                  <group name="Cone008_18" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty009_21" scale={1.423}>
                  <group name="Cone009_20">
                    <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty010_23" scale={1.423}>
                  <group name="Cone010_22" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty011_25" scale={1.423}>
                  <group name="Cone011_24" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty012_27" scale={2.59}>
                  <group name="Cone012_26" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty013_29" scale={2.59}>
                  <group name="Cone013_28" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty014_32" scale={2.59}>
                  <group name="Cone014_30" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone067_31" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty015_36" scale={2.59}>
                  <group name="Cone015_33" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone064_34" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone071_35" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty016_39" scale={0.577}>
                  <group name="Cone016_38" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty017_41" scale={0.577}>
                  <group name="Cone017_40">
                    <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty018_43" scale={0.577}>
                  <group name="Cone018_42" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty019_45" scale={0.577}>
                  <group name="Cone019_44" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty020_47" scale={1.051}>
                  <group name="Cone020_46" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty021_49" scale={1.051}>
                  <group name="Cone021_48" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty022_51" scale={1.051}>
                  <group name="Cone022_50" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty023_53" scale={1.051}>
                  <group name="Cone023_52" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty024_55" scale={0.821}>
                  <group name="Cone024_54" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty025_57" scale={0.821}>
                  <group name="Cone025_56">
                    <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty026_59" scale={0.821}>
                  <group name="Cone026_58" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty027_62" scale={0.821}>
                  <group name="Cone027_60" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone068_61" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty028_64" scale={1.495}>
                  <group name="Cone028_63" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty029_66" scale={1.495}>
                  <group name="Cone029_65" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty030_69" scale={1.495}>
                  <group name="Cone030_67" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone069_68" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty031_71" scale={1.495}>
                  <group name="Cone031_70" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty032_73" scale={0.223}>
                  <group name="Cone032_72" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty033_75" scale={0.223}>
                  <group name="Cone033_74">
                    <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty034_77" scale={0.223}>
                  <group name="Cone034_76" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty035_79" scale={0.223}>
                  <group name="Cone035_78" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty036_81" scale={0.406}>
                  <group name="Cone036_80" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty037_83" scale={0.406}>
                  <group name="Cone037_82" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty038_85" scale={0.406}>
                  <group name="Cone038_84" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty039_87" scale={0.406}>
                  <group name="Cone039_86" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_136" geometry={nodes.Object_136.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty040_89" scale={0.317}>
                  <group name="Cone040_88" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty041_91" scale={0.317}>
                  <group name="Cone041_90">
                    <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty042_93" scale={0.317}>
                  <group name="Cone042_92" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty043_95" scale={0.317}>
                  <group name="Cone043_94" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty044_97" scale={0.577}>
                  <group name="Cone044_96" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty045_100" scale={0.577}>
                  <group name="Cone045_98" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials['Scene_-_Root']} />
                  </group>
                  <group name="Cone070_99" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty046_102" scale={0.577}>
                  <group name="Cone046_101" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty047_104" scale={0.577}>
                  <group name="Cone047_103" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty048_106" scale={0.129}>
                  <group name="Cone048_105" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty049_108" scale={0.129}>
                  <group name="Cone049_107">
                    <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty050_110" scale={0.129}>
                  <group name="Cone050_109" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty051_112" scale={0.129}>
                  <group name="Cone051_111" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty052_114" scale={0.234}>
                  <group name="Cone052_113" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty053_116" scale={0.234}>
                  <group name="Cone053_115" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty054_118" scale={0.234}>
                  <group name="Cone054_117" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty055_120" scale={0.234}>
                  <group name="Cone055_119" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty056_122" scale={0.183}>
                  <group name="Cone056_121" rotation={[-Math.PI, -0.087, -Math.PI]}>
                    <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty057_124" scale={0.183}>
                  <group name="Cone057_123">
                    <mesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty058_126" scale={0.183}>
                  <group name="Cone058_125" rotation={[0, 0.313, 0]}>
                    <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty059_128" scale={0.183}>
                  <group name="Cone059_127" rotation={[-Math.PI, -0.226, -Math.PI]}>
                    <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty060_130" scale={0.333}>
                  <group name="Cone060_129" rotation={[0, 0.515, 0]}>
                    <mesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty061_132" scale={0.333}>
                  <group name="Cone061_131" rotation={[-Math.PI, -0.428, -Math.PI]}>
                    <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty062_134" scale={0.333}>
                  <group name="Cone062_133" rotation={[-Math.PI, -0.741, -Math.PI]}>
                    <mesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
                <group name="Empty063_136" scale={0.333}>
                  <group name="Cone063_135" rotation={[0, 0.654, 0]}>
                    <mesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials['Scene_-_Root']} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models/galaxy.gltf')
