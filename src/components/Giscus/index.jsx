import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
        repo="hcc429/cclog"
        repoId="R_kgDONMoTew"
        category="Announcements"
        categoryId="DIC_kwDONMoTe84CkHdV"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="zh-TW"
        loading="lazy"
        crossorigin="anonymous"
        async/>
  );
}